const dbConnection = require('../db_connection');

const getUserGrades = (userId, callback) => {
  const getUserGradesQuery = `
    SELECT *
    FROM users
    WHERE id = $1;
  `;

  dbConnection.query(getUserGradesQuery, [userId], (error, response) => {
    if (error) {
      console.log('Fetch user grades error: ', error);
      return callback(error);
    }
    console.log(response.rows);
    callback(null, response.rows);
  });
};

module.exports = getUserGrades;
