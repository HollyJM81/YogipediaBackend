CREATE TABLE Favourites (
  id INT PRIMARY KEY,
  english_name VARCHAR(255) NOT NULL,
  sanskrit_name VARCHAR(255) NOT NULL,
  sanskrit_name_adapted VARCHAR(255) NOT NULL,
  translation_name VARCHAR(255) NOT NULL,
  pose_description VARCHAR(255) NOT NULL,
  pose_benefits VARCHAR(255) NOT NULL,
  url_svg VARCHAR(255) NOT NULL,
  url_png VARCHAR(255) NOT NULL,
  url_svg_alt VARCHAR(255) NOT NULL,
  pose VARCHAR(255) NOT NULL,
  category VARCHAR(255) NOT NULL
  );

