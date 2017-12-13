const dbConnection = require('../db_connection');

const getUserGrades = (userId, callback) => {
  const getUserGradesQuery = `
    SELECT *
    FROM users
    WHERE id = $1;
  `;

  return new Promise((resolve, reject) => {
    dbConnection.query(getUserGradesQuery, [userId], (error, response) => {
      if (error) {
        console.log('Fetch user grades error: ', error);
        reject(error);
      }
      console.log(response.rows);
      resolve(response.rows);
    });
  });
};

module.exports = getUserGrades;
