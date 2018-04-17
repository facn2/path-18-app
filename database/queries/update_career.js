const dbConnection = require('../db_connection');

const updateCareerSpecificUni = (
  uniId,
  careerId,
  bagrut,
  psychometric,
  tawjihi,
) => {
  const query = `
  UPDATE universities_careers
    SET
      grade_bagrut = $3,
      grade_psychometric = $4,
      grade_tawjihi = $5
    WHERE
      uni_id = $1 AND career_id = $2
  `;

  return new Promise((resolve, reject) =>
    dbConnection.query(
      query,
      [uniId, careerId, bagrut, psychometric, tawjihi],
      (error, response) => {
        if (error) {
          console.log('Update uni in a specific career error: ', error);
          reject(error);
        }
        resolve(response.rows);
      },
    ),
  );
};

const updateCareerDetails = (
  careerId,
  titleAr,
  titleHe,
  taglineAr,
  taglineHe,
  descriptionAr,
  descriptionHe,
  juniorSalary,
  seniorSalary,
) => {
  const query = `
    UPDATE careers
      SET
        title_ar = $2,
        title_he = $3,
        tagline_ar = $4,
        tagline_he = $5,
        description_ar = $6,
        description_he = $7,
        salary_start = $8,
        salary_ten_year = $9,
      WHERE
        id = $1
  `;

  new Promise((resolve, reject) =>
    dbConnection.query(
      query,
      [
        careerId,
        titleAr,
        titleHe,
        taglineAr,
        taglineHe,
        descriptionAr,
        descriptionHe,
        juniorSalary,
        seniorSalary,
      ],
      (error, response) => {
        if (error) {
          console.log('Update career error: ', error);
          reject(error);
        } else {
          resolve(response.rows);
        }
      },
    ),
  );
};

module.exports = { updateCareerSpecificUni, updateCareerDetails };
