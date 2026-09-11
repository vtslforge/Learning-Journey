-- primary key
DROP TABLE IF EXISTS basic_schema.example3;

CREATE TABLE basic_schema.example3 (
    id SERIAL PRIMARY KEY,
    name TEXT
);

INSERT INTO basic_schema.example3 (name) VALUES ('John Doe');
-- here is invalid scnario
-- gives error becasuse dublicate primary key value is not allowed as auto-incremented value is already set to 1 for the first row inserted.
INSERT INTO basic_schema.example3 (id, name) VALUES (1, 'Jane Doe');
-- output will be only one row with id = 1 and name = 'John Doe'
SELECT * FROM basic_schema.example3 WHERE id = 1;