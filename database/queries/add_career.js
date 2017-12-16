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

  dbConnection.query(newCareerQuery, dataItems, (err, res) => {
    if (err) {
      console.log('Add career error: ', error);
      return callback(err);
    }
    return callback(null, res.rows);
  });
};

module.exports = addCareer;
