ALTER TABLE UserFavourites
ADD CONSTRAINT fk_pose_id FOREIGN KEY (pose_id) REFERENCES poses (pose_id);