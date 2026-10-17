CREATE SCHEMA IF NOT EXISTS studentsdata;

CREATE TABLE
    IF NOT EXISTS studentsdata.students (id SERIAL PRIMARY KEY, name VARCHAR(255) NOT NULL);

INSERT INTO
    studentsdata.students (name)
VALUES
    ('Vatsalya Singh'),
    ('Rahul Sharma'),
    ('Priya Verma'),
    ('Amit Kumar'),
    ('Sneha Patel'),
    ('Rohit Singh'),
    ('Ananya Gupta'),
    ('Arjun Mehta'),
    ('Neha Sharma'),
    ('Karan Verma');

CREATE TABLE
    IF NOT EXISTS studentsdata.studentsApplication (
        student_id INTEGER PRIMARY KEY REFERENCES studentsdata.students (id),
        roll_number INTEGER UNIQUE NOT NULL,
        date_of_birth DATE
    );

INSERT INTO
    studentsdata.studentsApplication (student_id, roll_number, date_of_birth)
VALUES
    (1, 101, '2002-05-15'),
    (2, 102, '2001-08-20'),
    (3, 103, '2002-11-10');

-- Display both tables
SELECT
    *
FROM
    studentsdata.students;

SELECT
    *
FROM
    studentsdata.studentsApplication;

INSERT INTO
    studentsdata.studentsApplication (student_id, roll_number, date_of_birth)
VALUES
    (21, 121, '2002-05-15');

SELECT
    id,
    name,
    student_id,
    roll_number,
    date_of_birth
FROM
    studentsdata.students
    LEFT JOIN studentsdata.studentsApplication ON studentsdata.students.id = studentsdata.studentsApplication.student_id;