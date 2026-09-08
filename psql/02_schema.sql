-- To create schema
CREATE SCHEMA IF NOT EXISTS basic_schema;

-- UUID generator extension provided by PostgreSQL
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Query to list all schemas
SELECT schema_name
FROM information_schema.schemata
ORDER BY schema_name;