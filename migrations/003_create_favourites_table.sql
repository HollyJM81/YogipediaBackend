CREATE TABLE UserFavourites (
  favourite_id SERIAL PRIMARY KEY,
  user_id INT REFERENCES Users(user_id) ON DELETE CASCADE,
  pose_id INT REFERENCES Poses(pose_id) ON DELETE CASCADE
  );