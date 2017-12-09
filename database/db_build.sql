BEGIN;

DROP TABLE IF EXISTS users, careers, admins, universities, users_careers, universities_careers cascade;

CREATE TABLE users(
  id                    SERIAL    PRIMARY KEY,
  first_name            TEXT      NOT NULL,
  last_name             TEXT      NOT NULL,
  email                 TEXT      NOT NULL UNIQUE,
  grade_bagrut          INTEGER   NOT NULL,
  grade_psychometric    INTEGER   NOT NULL,
  grade_tawjihi         INTEGER
);

CREATE TABLE admins(
  id            SERIAL  PRIMARY KEY,
  first_name    TEXT    NOT NULL,
  last_name     TEXT    NOT NULL,
  email         TEXT    NOT NULL UNIQUE
);

CREATE TABLE careers(
  id                  SERIAL    PRIMARY KEY,
  title_ar            TEXT      NOT NULL,
  title_he            TEXT      NOT NULL,
  tagline_ar          TEXT      NOT NULL,
  tagline_he          TEXT      NOT NULL,
  description_ar      TEXT      NOT NULL,
  description_he      TEXT      NOT NULL,
  salary_start        TEXT      NOT NULL,
  salary_ten_year     TEXT      NOT NULL,
  icon_name           TEXT      NOT NULL,
  icon_color          TEXT      NOT NULL
);

CREATE TABLE universities(
  id              SERIAL    PRIMARY KEY,
  name_ar         TEXT      NOT NULL,
  name_he         TEXT      NOT NULL,
  location_ar     TEXT      NOT NULL,
  location_he     TEXT      NOT NULL
);

CREATE TABLE users_careers(
  user_id     INTEGER   REFERENCES  users (id),
  career_id   INTEGER   REFERENCES  careers (id)
);

CREATE TABLE universities_careers(
  uni_id      INTEGER   REFERENCES  universities (id),
  career_id   INTEGER   REFERENCES  careers (id),
  grade_bagrut INTEGER,
  grade_psychometric INTEGER,
  grade_tawjihi INTEGER
);

INSERT INTO users(first_name, last_name, email, grade_bagrut, grade_psychometric) values('matt', 'king', 'matt@king', 100, 200);

INSERT INTO careers (
  title_ar, title_he, tagline_ar, tagline_he,
  description_ar, description_he, salary_start, salary_ten_year, icon_name, icon_color)
  VALUES
  ('Vet', 'Vet', 'Helps animals', 'Helps animals', 'animal doctor', 'animal doctor', '100000', '2000', 'pets', '#a62632'),
  ('Doctor', 'Doctor', 'Helps humans', 'Helps humans', 'human doctor', 'human doctor', '100000', '2000', 'local_hospital', '#a62672'),
  ('Lawyer', 'Lawyer', 'Helps criminals', 'Helps criminals', 'criminal doctor', 'criminal doctor', '100000', '2000', 'gavel', '#9a26a6'),
  ('Web developer', 'Web developer', 'Helps websites', 'Helps websites', 'website doctor', 'website doctor', '100000', '2000', 'important_devices', '#FFD54F'),
  ('Teacher', 'Teacher', 'Helps children', 'Helps children', 'children helper', 'children helper', '100000', '2000', 'school', '#2672a6');


COMMIT;
