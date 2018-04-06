const dbConnection = require('../db_connection');

const updateUserGrades = (id, grades) => {
  const updateUserGradesQuery = `
  UPDATE users
    SET
      grade_bagrut = $2,
      grade_psychometric = $3,
      grade_tawjihi = $4
    WHERE
      id = $1
`;
  return new Promise((resolve, reject) => {
    dbConnection.query(
      updateUserGradesQuery,
      [id, ...grades],
      (error, response) => {
        if (error) {
          reject(error);
        }
        console.log(response);
        resolve(response);
      }
    );
  });
};

module.exports = updateUserGrades;
