const dbConnection = require('../db_connection');

const getAllCareers = (userId, callback) => {
  const allCareersQuery = `
    SELECT * FROM careers
    WHERE careers.id NOT IN (
      SELECT career_id FROM users_careers
      WHERE users_careers.user_id = $1);`;

  dbConnection.query(allCareersQuery, [userId], (error, response) => {
    if (error) {
      console.log('Get all careers error: ', error);
      return callback(error);
    } else {
      callback(null, response.rows);
    }
  });
};

module.exports = getAllCareers;
