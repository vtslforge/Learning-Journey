-- Drop an existing table 'IF EXISTS basic_schema.passedStudents'
DROP TABLE IF EXISTS basic_schema.products;

CREATE TABLE basic_schema.products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    -- the default stock value is 0 if no value is provided
    stock INTEGER DEFAULT 0,
    -- to store large whole number then integer we can use BIGINT data type
    total_views BIGINT DEFAULT 0,
    -- NUMERIC data type is used to store exact decimal values
    -- 10 means total digits 2 means digits after decimal point ex- 12345678.90
    price NUMERIC(10, 2),
    -- BOOLEAN data type is used to store true or false values
    is_active BOOLEAN DEFAULT TRUE

);

-- query 

-- Insert data into 'basic_schema.products'
INSERT INTO basic_schema.products (name, description, stock, total_views, price, is_active)
VALUES 
    ('Product 1', 'Description of Product 1', 10, 1000, 19.99, TRUE),
    ('Product 2', 'Description of Product 2', 5, 500, 29.99, FALSE),
    ('Product 3', 'Description of Product 3', 20, 2000, 9.99, TRUE);

SELECT * FROM basic_schema.products;
-- here we will get data only for active products because we have set the default value of is_active column to TRUE
SELECT id, name, price, is_active
FROM basic_schema.products
WHERE is_active  = TRUE;