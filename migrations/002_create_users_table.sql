CREATE TABLE Users (
  user_id SERIAL PRIMARY KEY, 
  firebase_uid VARCHAR(255) NOT NULL UNIQUE,
  display_name VARCHAR(255),
  email VARCHAR(255) NOT NULL UNIQUE
);
