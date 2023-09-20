DROP TABLE UserFavourites;

CREATE TABLE UserFavourites (
  favourite_id SERIAL PRIMARY KEY,
  user_id INT,
  pose_id INT
  );