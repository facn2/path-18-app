const dbConnection = require('../db_connection');

const unlikeCareer = (data, callback) => {
  const unlikeCareerQuery = `DELETE FROM users_careers WHERE user_id = $1 AND career_id = $2 RETURNING career_id`;
  dbConnection.query(unlikeCareerQuery, data, (error, response) => {
    if (error) {
      callback(error);
    }
    callback(null, response.rows);
  });
};

module.exports = unlikeCareer;
