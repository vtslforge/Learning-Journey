import dotenv from "dotenv";
import type { Level } from "pino";

dotenv.config();

function checkRequiredENV(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`mission env variable for ${key}`);
  }

  return value;
}

export const env = {
  // Port used to run the server. Defaults to 3001 if PORT is not set.
  port: Number(process.env.PORT ?? 3001),

  // Checks whether the application is running in production.
  isProduction: (process.env.NODE_ENV ?? "development") === "production",

  // Stores the current Node environment. Defaults to development.
  nodeEnv: process.env.NODE_ENV ?? "development",

  // Stores the Pino log level. Defaults to info.
  logLevel: (process.env.LOG_LEVEL ?? "info") as Level,

  DATABASE_URL: checkRequiredENV("DATABASE_URL"),
} as const;
