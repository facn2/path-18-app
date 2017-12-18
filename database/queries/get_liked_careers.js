const dbConnection = require('../db_connection');

const getLikedCareers = userId => {
  const getLikedCareersQuery = `
    SELECT * FROM careers C
    JOIN users_careers UC ON C.id = UC.career_id
    WHERE UC.user_id = $1;`;

  return new Promise((resolve, reject) => {
    dbConnection.query(getLikedCareersQuery, [userId], (error, response) => {
      if (error) {
        console.log('Get liked careers error: ', error);
        reject(error);
      }
      resolve(response.rows);
    });
  });
};

module.exports = getLikedCareers;
