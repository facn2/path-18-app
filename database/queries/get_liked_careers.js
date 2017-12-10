const dbConnection = require('../db_connection');

const getLikedCareers = (userId, callback) => {
  const getLikedCareersQuery = `
    SELECT * FROM careers C
    JOIN users_careers UC ON C.id = UC.career_id
    WHERE UC.user_id = $1;`;
  dbConnection.query(getLikedCareersQuery, [userId], (error, response) => {
    if (error) {
      console.log('Get liked careers error: ', error);
      return callback(error);
    }
    callback(null, response.rows);
  });
};

module.exports = getLikedCareers;
