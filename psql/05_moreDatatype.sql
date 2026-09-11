-- Drop an existing table  IF EXISTES '
DROP TABLE IF EXISTS basic_schema.events; ;

CREATE TABLE basic_schema.events (
    -- UUID data type is used to store Universally Unique Identifiers (UUIDs)
    id UUID PRIMARY KEY DEFAULT  gen_random_uuid(),
    event_name TEXT NOT NULL,

    -- JSONB data type is used to store JSON data in a binary format
    metadata JSONB DEFAULT '{}'::JSONB,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Insert data into 'basic_schema.events'
INSERT INTO basic_schema.events (event_name, metadata)
VALUES (
    'sign_up',
    '{"browser" : "chrome"}'
),
(
    'login',
    '{"browser" : "firefox"}'
),
(
    'purchase',
    '{"item" : "laptop", "price" : 1200}'
);

-- Query data inside jsonb data type to get specific key value
SELECT * FROM basic_schema.events;
-- here we are querying the 'metadata' column to extract the value of the 'browser' key from the JSONB data type. The '->>' operator is used to get the value as text.
SELECT event_name, metadata->>'browser' AS browser 
FROM basic_schema.events
WHERE metadata ? 'browser';

