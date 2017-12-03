const dbConnection = require('../db_connection');

const getLikedCareers = callback => {
  const getLikedCareersQuery = `SELECT * FROM careers JOIN users_careers ON careers.id = users_careers.career_id WHERE users_careers.user_id = $1;`;
  dbConnection.query(getLikedCareersQuery, [1], (error, response) => {
    if (error) {
      return callback(error);
    }
    callback(null, response.rows);
  });
};

module.exports = getLikedCareers;
