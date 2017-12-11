const dbConnection = require('../db_connection');

const getUserGrades = (userId, callback) => {
  const getUserGradesQuery = `
    SELECT (grade_bagrut, grade_psychometric, grade_tawjihi)
    FROM users
    WHERE id = $1;
  `;

  dbConnection.query(getUserGradesQuery, [userId], (error, response) => {
    if (error) {
      console.log('Fetch user grades error: ', error);
      return callback(error);
    }
    callback(null, response.rows);
  });
};

module.exports = getUserGrades;
