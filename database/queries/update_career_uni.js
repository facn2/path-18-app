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

module.exports = updateCareerSpecificUni;
