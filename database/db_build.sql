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
  title               TEXT      NOT NULL,
  title_ar            TEXT      NOT NULL,
  title_he            TEXT      NOT NULL,
  tagline             TEXT      NOT NULL,
  tagline_ar          TEXT      NOT NULL,
  tagline_he          TEXT      NOT NULL,
  description         TEXT      NOT NULL,
  description_ar      TEXT      NOT NULL,
  description_he      TEXT      NOT NULL,
  image_url           TEXT      NOT NULL,
  salary_start        INTEGER   NOT NULL,
  salary_ten_year     INTEGER   NOT NULL,
  icon_url            TEXT      NOT NULL
);

CREATE TABLE universities(
  id              SERIAL    PRIMARY KEY,
  name            TEXT      NOT NULL,
  name_ar         TEXT      NOT NULL,
  name_he         TEXT      NOT NULL,
  location        TEXT      NOT NULL,
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

COMMIT;
