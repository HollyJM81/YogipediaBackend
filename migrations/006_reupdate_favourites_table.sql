DROP TABLE UserFavourites;

CREATE TABLE UserFavourites (
  favourite_id SERIAL PRIMARY KEY,
  user_id VARCHAR(255),
  pose_id INT
  );