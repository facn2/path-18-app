const dbConnection = require('../db_connection');

const getAllCareers = userId => {
  const allCareersQuery = `
    SELECT * FROM careers
    WHERE careers.id NOT IN (
      SELECT career_id FROM users_careers
      WHERE users_careers.user_id = $1);`;

  return new Promise((resolve, reject) => {
    dbConnection.query(allCareersQuery, [userId], (error, response) => {
      if (error) {
        console.log('Get all careers error: ', error);
        return reject(error);
      } else {
        resolve(response.rows);
      }
    });
  });
};

module.exports = getAllCareers;
