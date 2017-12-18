const dbConnection = require('../db_connection');

const unlikeCareer = (userId, careerId) => {
  const unlikeCareerQuery = `
    DELETE FROM users_careers
    WHERE user_id = $1 AND career_id = $2
    RETURNING career_id;`;

  return new Promise((resolve, reject) => {
    dbConnection.query(
      unlikeCareerQuery,
      [userId, careerId],
      (error, response) => {
        if (error) {
          console.log('Unlike career error: ', error);
          return reject(error);
        }
        resolve(response.rows);
      }
    );
  });
};

module.exports = unlikeCareer;
