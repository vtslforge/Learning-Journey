// find user by email
import { DBUserRow, User } from "../types/user";
import { pool } from "../lib/db";

export async function findUserByEmail(email: string): Promise<User | null> {
  const result = await pool.query<DBUserRow>(
    "SELECT id, email, role, created_at FROM users WHERE email = $1",
    [email],
  );

  return result.rows[0] ?? null;
}

export async function createUser(
  email: string,
  passwordHash: string,
): Promise<User> {
  const result = await pool.query<DBUserRow>(
    `INSERT INTO users (email, password_hash)
    VALUES ($1, $2)
    RETURNING id, email, role, created_at
    `,
    [email, passwordHash],
  );
  const user = result.rows[0];
  if (!user) {
    throw new Error("User insert did not return a row");
  }

  return user;
}
