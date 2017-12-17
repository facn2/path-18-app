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
  grade_bagrut TEXT,
  grade_psychometric TEXT,
  grade_tawjihi TEXT
);

INSERT INTO users(fb_id, name, grade_bagrut, grade_psychometric, grade_tawjihi)
  VALUES(10156265477282446, 'matt king', 87, 620, 85);

INSERT INTO careers (
  title_ar, title_he, tagline_ar, tagline_he,
  description_ar, description_he, salary_start, salary_ten_year, icon_name, icon_color)
  VALUES
  ('Vet', 'Vet', 'Helps animals', 'Helps animals', 'A veterinary physician, usually called a vet, which is shortened from veterinarian or veterinary surgeon, is a professional who practices veterinary medicine by treating diseases, disorders, and injuries in animals.', 'animal doctor', '10000', '47000', 'pets', '#a62632'),
  ('Doctor', 'Doctor', 'Helps humans', 'Helps humans', 'A physician, medical practitioner, medical doctor, or simply doctor is a professional who practises medicine, which is concerned with promoting, maintaining, or restoring health through the study, diagnosis, and treatment of disease, injury, and other physical and mental impairments.', 'human doctor', '10000', '47000', 'local_hospital', '#a62672'),
  ('Lawyer', 'Lawyer', 'Helps criminals', 'Helps criminals', 'A lawyer is a person who practices law, as a paralegal, advocate, barrister, attorney, counselor or solicitor or chartered legal executive. Working as a lawyer involves the practical application of abstract legal theories and knowledge to solve specific individualized problems, or to advance the interests of those who hire lawyers to perform legal services.', 'criminal doctor', '10000', '47000', 'gavel', '#9a26a6'),
  ('Web developer', 'Web developer', 'Helps websites', 'Helps websites', 'A web developer is a programmer who specializes in, or is specifically engaged in, the development of World Wide Web applications, or applications that are run over HTTP from a web server to a web browser.', 'website doctor', '10000', '47000', 'important_devices', '#FFD54F'),
  ('Teacher', 'Teacher', 'Helps children', 'Helps children', 'A teacher (also called a school teacher or, in some contexts, an educator) is a person who helps others to acquire knowledge, competences or values.
', 'children helper', '10000', '47000', 'school', '#2672a6');

INSERT INTO universities(name_ar, name_he)
  VALUES
  ('Haifa', 'Haifa'),
  ('Tel Aviv', 'Tel Aviv'),
  ('Technion', 'Technion'),
  ('Hebrew', 'Hebrew'),
  ('Arab American', 'Arab American'),
  ('Ben Gurion', 'Ben Gurion');

  INSERT INTO universities_careers(uni_id, career_id, grade_bagrut, grade_psychometric, grade_tawjihi)
  VALUES
  (1, 1, 86, 580, 86),
  (2, 1, 84, 570, 82),
  (3, 1, 90, 625, 90),
  (4, 1, 90, 625, 90),
  (5, 1, 90, 625, 90),
  (6, 1, 90, 625, 90),
  (1, 2, 86, 580, 86),
  (2, 2, 84, 570, 82),
  (3, 2, 90, 625, 90),
  (4, 2, 90, 625, 90),
  (5, 2, 90, 625, 90),
  (6, 2, 90, 625, 90),
  (1, 3, 86, 580, 86),
  (2, 3, 84, 570, 82),
  (3, 3, 90, 625, 90),
  (4, 3, 90, 625, 90),
  (5, 3, 90, 625, 90),
  (6, 3, 90, 625, 90),
  (1, 4, 86, 580, 86),
  (2, 4, 84, 570, 82),
  (3, 4, 90, 625, 90),
  (4, 4, 90, 625, 90),
  (5, 4, 90, 625, 90),
  (6, 4, 90, 625, 90),
  (1, 5, 86, 580, 86),
  (2, 5, 84, 570, 82),
  (3, 5, 90, 625, 90),
  (4, 5, 90, 625, 90),
  (5, 5, 90, 625, 90),
  (6, 5, 90, 625, 90);

COMMIT;
