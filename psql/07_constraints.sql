-- Drop an existing table 'IF EXISTS basic_schema.exampleTwo'
DROP TABLE IF EXISTS basic_schema.exampleTwo;

CREATE TABLE basic_schema.exampleTwo (
    id SERIAL PRIMARY KEY,
    -- NOT NULL means that the column cannot have NULL values
    nick_name TEXT NOT NULL,
    bio TEXT NOT NULL,
    -- email must be unique and cannot be null
    email TEXT UNIQUE NOT NULL,
    -- age must be greater than or equal to 18
    -- check constraint is used to enforce a condition on the column values
    age INTEGER CHECK (age >=18),
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO basic_schema.exampleTwo (nick_name, bio, email, age)
VALUES
    ('Vatsalya', 'learning postgres', 'vatsalya@gmail.com', 20),
    -- will throw an error because age is less than 18
    ('aman', 'example', 'aman@gmail.com', 18);

    
