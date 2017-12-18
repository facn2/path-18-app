BEGIN;

DROP TABLE IF EXISTS users, careers, admins, universities, users_careers, universities_careers cascade;

CREATE TABLE users(
  id                    SERIAL    PRIMARY KEY,
  fb_id                 BIGINT   NOT NULL,
  name                  TEXT      NOT NULL,
  grade_bagrut          INTEGER,
  grade_psychometric    INTEGER,
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
  location_ar     TEXT,
  location_he     TEXT
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

INSERT INTO universities(name_ar, name_he)
  VALUES
  ('Haifa', 'Haifa'),
  ('Technion', 'Technion'),
  ('Hebrew', 'Hebrew'),
  ('Tel Aviv', 'Tel Aviv'),
  ('Arab American', 'Arab American'),
  ('Ben Gurion', 'Ben Gurion');

COMMIT;
