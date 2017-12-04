const dbConnection = require('../db_connection');

const getAllCareers = callback => {
  const allCareersQuery = `SELECT * FROM careers WHERE careers.id NOT IN (SELECT career_id FROM users_careers WHERE users_careers.user_id = $1);`;
  dbConnection.query(allCareersQuery, [1], (error, response) => {
    if (error) {
      return callback(error);
    } else {
      callback(null, response.rows);
    }
  });
};

module.exports = getAllCareers;
