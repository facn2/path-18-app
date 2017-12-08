const dbConnection = require('../db_connection');

const unlikeCareer = (userId, careerId, callback) => {
  const unlikeCareerQuery = `DELETE FROM users_careers WHERE user_id = $1 AND career_id = $2 RETURNING career_id`;
  dbConnection.query(
    unlikeCareerQuery,
    [userId, careerId],
    (error, response) => {
      if (error) {
        console.log('Unlike career error: ', error);
        return callback(error);
      }
      callback(null, response.rows);
    }
  );
};

module.exports = unlikeCareer;
