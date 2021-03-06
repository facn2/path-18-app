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
  username    TEXT    NOT NULL UNIQUE,
  password    TEXT     NOT NULL,
  role        TEXT     NOT NULL
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
  ('Ariel University', 'Ariel University'),
  ('Ben Gurion University of the Negev', 'Ben Gurion University of the Negev'),
  ('Bar-Ilan University', 'Bar-Ilan University'),
  ('University of Haifa', 'University of Haifa'),
  ('Hebrew University of Jerusalem', 'Hebrew University of Jerusalem'),
  ('Open University of Israel', 'Open University of Israel'),
  ('Technion - Israel Institute of Technology', 'Technion - Israel Institute of Technology'),
  ('Tel Aviv University', 'Tel Aviv University'),
  ('Weizmann Institute of Science', 'Weizmann Institute of Science');

INSERT INTO users(fb_id, name, grade_bagrut, grade_psychometric, grade_tawjihi)
  VALUES (234567, 'king', 95, 625, 95);

COMMIT;
