import path from "node:path";
import fs from "node:fs";
import { pool } from "../lib/db";
import { logger } from "../lib/logger";

// Absolute path to the migrations directory
const MIGRATE_DIR = path.join(process.cwd(), "migrations");

// SQL query to create a migration tracking table if it doesn't already exist.
const CREATE_MIGRATION_TABLE = `
    CREATE TABLE IF NOT EXISTS migrations (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL UNIQUE,
        executed_at TIMESTAMP NOT NULL DEFAULT NOW()
    )
`;

type MigrationRow = {
  name: string;
};

// Fetch all previously executed migration names from the database.
async function getExecutedMigrations(): Promise<string[]> {
  const result = await pool.query<MigrationRow>(
    "SELECT name FROM migrations ORDER BY name",
  );

  return result.rows.map((row) => row.name);
}

// Read the migrations directory and retrieve all SQL migration files.
// Sort filenames alphabetically to ensure migrations execute in the correct order.
function getMigrationFiles(): string[] {
  return fs
    .readdirSync(MIGRATE_DIR)
    .filter((file) => file.endsWith(".sql"))
    .sort();
}

// Execute a single migration file.
async function runMigration(fileName: string): Promise<void> {
    
  const sql = fs.readFileSync(path.join(MIGRATE_DIR, fileName), "utf-8");
  const client = await pool.connect();

  try {
    // Start a database transaction.
    await client.query("BEGIN");

    // Execute the SQL statements inside the migration file.
    await client.query(sql);

    // Record the migration filename in the migrations table.
    await client.query("INSERT INTO migrations (name) VALUES ($1)", [fileName]);

    // Commit the transaction and permanently save its changes.
    await client.query("COMMIT");

    logger.info(`migration completed: ${fileName}`);
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    client.release();
  }
}

// Main function responsible for managing the migration process.
async function migrate(): Promise<void> {
  // Create the migrations tracking table if it does not exist.
  await pool.query(CREATE_MIGRATION_TABLE);

  // Fetch executed migrations and convert their names into a Set.
  // A Set allows efficient checking of whether a migration has already run.
  const executed = new Set(await getExecutedMigrations());

  // Retrieve all available SQL migration files from the migrations directory.
  const migrationFiles = getMigrationFiles();

  // Find migration files that are not present in the executed Set.
  // These are the migrations that still need to run.
  const pending = migrationFiles.filter((file) => !executed.has(file));

  // If every migration has already been executed, stop the process.
  if (pending.length === 0) {
    logger.info("no pending migration");
    return;
  }

  // Execute pending migrations one by one in alphabetical order.
  // await ensures each migration finishes before the next one starts.
  for (const fileName of pending) {
    await runMigration(fileName);
  }

  // Log a message after all pending migrations have completed.
  logger.info("all migrations completed");
}

// Start the migration process.
migrate()
  // Catch any error that occurs during migration execution.
  .catch((error) => {
    // Log the migration failure along with the error details.
    logger.error({ err: error }, "Migration failed");

    // Exit the Node.js process with status code 1 (failure).
    process.exit(1);
  })
  // Close the PostgreSQL connection pool when the migration process finishes.
  .finally(() => pool.end());
