const dbConnection = require('../db_connection');
const updateCareer = `INSERT INTO careers (
  title_ar, title_he, tagline_ar, tagline_he,
  description_ar, description_he, image_url,
  salary_start, salary_ten_year, icon_url)
  VALUES
  ($1,$2, $3, $4, $5, $6, $7, $8, $9, $10);`;

const addCareer = (data, cb) => {
  console.log('career from addCareer ', data);
  const {
    title_ar,
    title_he,
    tagline_ar,
    tagline_he,
    description_ar,
    description_he,
    image_url,
    salary_start,
    salary_ten_year,
    icon_url
  } = data;

  const send = [
    title_ar,
    title_he,
    tagline_ar,
    tagline_he,
    description_ar,
    description_he,
    image_url,
    parseInt(salary_start),
    parseInt(salary_ten_year),
    icon_url
  ];

  dbConnection.query(updateCareer, send, (err, res) => {
    if (err) {
      console.log(err);
      return err;
    }
    return res.rows;
  });
};

module.exports = addCareer;
