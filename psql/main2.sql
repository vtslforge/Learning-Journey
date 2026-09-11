CREATE EXTENSION IF NOT EXISTS pgcrypto;

DROP TABLE IF EXISTS post_tags;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS tags;
DROP TABLE IF EXISTS users;


CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL
);


CREATE TABLE posts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id),
    title TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'draft'
        CHECK (status IN ('draft', 'published')),
    views INTEGER NOT NULL DEFAULT 0
        CHECK (views >= 0)
);


CREATE TABLE comments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    post_id UUID NOT NULL REFERENCES posts(id),
    body TEXT NOT NULL
);


CREATE TABLE tags (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL UNIQUE
);


CREATE TABLE post_tags (
    post_id UUID NOT NULL REFERENCES posts(id),
    tag_id UUID NOT NULL REFERENCES tags(id),
    PRIMARY KEY (post_id, tag_id)
);


-- 1. Seed users

INSERT INTO users (name)
VALUES
    ('Alice'),
    ('Bob'),
    ('Charlie');


-- 2. Seed posts

INSERT INTO posts (user_id, title, status, views)
VALUES
    (
        (SELECT id FROM users WHERE name = 'Alice'),
        'My First Post',
        'published',
        100
    ),
    (
        (SELECT id FROM users WHERE name = 'Bob'),
        'Learning PostgreSQL',
        'draft',
        0
    );


-- 3. Seed comments

INSERT INTO comments (post_id, body)
VALUES
    (
        (SELECT id FROM posts WHERE title = 'My First Post'),
        'Great post!'
    ),
    (
        (SELECT id FROM posts WHERE title = 'Learning PostgreSQL'),
        'Very helpful!'
    );


-- 4. Seed tags

INSERT INTO tags (name)
VALUES
    ('Tech'),
    ('Programming'),
    ('Database');


-- 5. Seed post_tags

INSERT INTO post_tags (post_id, tag_id)
VALUES
    (
        (SELECT id FROM posts WHERE title = 'My First Post'),
        (SELECT id FROM tags WHERE name = 'Tech')
    ),
    (
        (SELECT id FROM posts WHERE title = 'My First Post'),
        (SELECT id FROM tags WHERE name = 'Programming')
    ),
    (
        (SELECT id FROM posts WHERE title = 'Learning PostgreSQL'),
        (SELECT id FROM tags WHERE name = 'Database')
    );