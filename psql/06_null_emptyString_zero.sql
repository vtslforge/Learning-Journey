-- null - unknown/missing value
-- empty string - known string value but it contains no characters
-- zero - actual numeric value of 0

DROP TABLE IF EXISTS basic_schema.exampleOne;

CREATE TABLE basic_schema.exampleOne (
    id SERIAL PRIMARY KEY,
    nick_name TEXT,
    bio TEXT,
    score INTEGER
);

INSERT INTO basic_schema.exampleOne (nick_name, bio, score)
VALUES 
-- here nickname is null, bio is empty string and score is 0
(null,'learning postgres', 10),
('','empty nickname',20),
-- here 0 is an actual numeric value, not null or empty string
('vatsalya','',0),
('john',null, null);

SELECT * FROM basic_schema.exampleOne; 
-- to check records with null values in the 'nick_name' column
SELECT * FROM basic_schema.exampleOne WHERE nick_name IS NULL;
-- to check records with empty string values in the 'nick_name' column
SELECT * FROM basic_schema.exampleOne WHERE nick_name = '';
-- to check records with non-null values in the 'nick_name' column
-- (null,'learning postgres', 10), - we wont get this record because nick_name is null but we will get the record ('','empty nickname',20) because nick_name is empty string and not null
SELECT * FROM basic_schema.exampleOne WHERE nick_name IS NOT NULL;