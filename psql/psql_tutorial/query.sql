-- here example of inner join 
-- SELECT users.name, posts.status FROM  users INNER JOIN posts ON users.id = posts.user_id;  
SELECT
    users.name AS user_name,
    posts.title AS post_title,
    comments.body AS comment,
    tags.name AS tag
FROM users
LEFT JOIN posts
    ON users.id = posts.user_id
LEFT JOIN comments
    ON posts.id = comments.post_id
LEFT JOIN post_tags
    ON posts.id = post_tags.post_id
LEFT JOIN tags
    ON post_tags.tag_id = tags.id;