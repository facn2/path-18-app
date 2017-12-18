const dbConnection = require('../db_connection');

const addCareer = (data, callback) => {
  const newCareerQuery = `
    INSERT INTO careers
    (title_ar, title_he, tagline_ar, tagline_he,
    description_ar, description_he, salary_start,
    salary_ten_year, icon_name, icon_color)
    VALUES ($1,$2, $3, $4, $5, $6, $7, $8, $9, $10)
    RETURNING id;`;

  const {
    title_ar,
    title_he,
    tagline_ar,
    tagline_he,
    description_ar,
    description_he,
    salary_start,
    salary_ten_year,
    icon_name,
    icon_color,
  } = data;

  const dataItems = [
    title_ar,
    title_he,
    tagline_ar,
    tagline_he,
    description_ar,
    description_he,
    salary_start,
    salary_ten_year,
    icon_name,
    icon_color,
  ];

  return new Promise((resolve, reject) => {
    dbConnection.query(newCareerQuery, dataItems, (err, res) => {
      if (err) {
        console.log('Add career error: ', err);
        return reject(err);
      }
      resolve(res.rows);
    });
  });
};

module.exports = addCareer;
