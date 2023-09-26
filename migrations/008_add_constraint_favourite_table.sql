ALTER TABLE UserFavourites
ADD CONSTRAINT unique_user_pose_combination UNIQUE (user_id, pose_id);