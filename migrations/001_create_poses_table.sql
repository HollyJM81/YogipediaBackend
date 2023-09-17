  CREATE TABLE Poses (
  pose_id SERIAL PRIMARY KEY,
  pose_name VARCHAR(255) NOT NULL,
  sanskrit_name VARCHAR(255) NOT NULL,
  pose_description VARCHAR(1024) NOT NULL,
  pose_benefits VARCHAR(1024) NOT NULL,
  url_png VARCHAR(255) NOT NULL,
  category VARCHAR(255) NOT NULL,
  level VARCHAR(100) NOT NULL
  );
