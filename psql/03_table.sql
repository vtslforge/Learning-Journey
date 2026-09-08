-- Drop an existing table 'basic_schema.students'
DROP TABLE IF EXISTS basic_schema.students;

-- Create table in the schema basic_schema
CREATE TABLE
    basic_schema.students (
        id SERIAL PRIMARY KEY,
        -- SERIAL an auto incremental integer
        -- PRIMARY KEY simply means this column is uniquely indentifies each row
        name TEXT NOT NULL,
        -- TEXT gonna represent string data 
        -- NOT NULL means this column is required no name value psql gonna reject
        email TEXT NOT NULL UNIQUE,
        -- UNIQUE means this column value must be unique for each row
        -- like no two students can have the same email address
        age INTEGER CHECK (age >= 18),
        -- CHECK constraint ensures that the age value is greater than or equal to 18
        created_at TIMESTAMP DEFAULT NOW ()
        -- TIMESTAMP store date and time format
        -- DEFAULT NOW() means if no value is provided for created_at column, it will automatically set to the current date and time
    );

-- to insert data into the table
INSERT INTO
    basic_schema.students (name, email, age)
VALUES
    ('vatsalya singh', 'vtsl@gmail.com', 24),
    ('Aman Kumar', 'ar32@gmail.com', 20);

-- to retrieve data from the table
SELECT * FROM basic_schema.students;