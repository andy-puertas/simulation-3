-- Creating tables

-- CREATE TABLE users (  
--     id SERIAL PRIMARY KEY,
--     username varchar(20),
--     password varchar(20), 
--     profile_pic TEXT
-- )



-- CREATE TABLE posts (
--     id SERIAL PRIMARY KEY,
--     title varchar(45),
--     img TEXT, 
--     content TEXT,
--     author_id integer REFERENCES users (id)
-- )

-- Creating user

-- INSERT INTO users (username, password, profile_pic)
-- VALUES ($1, $2, $3)
-- RETURNING *;