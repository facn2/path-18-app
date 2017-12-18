const dbConnection = require('../db_connection');

const likeCareer = (userId, careerId) => {
  const likeCareerQuery = `
    INSERT INTO users_careers(user_id, career_id)
    VALUES($1, $2)
    RETURNING (user_id, career_id);`;

  return new Promise((resolve, reject) => {
    dbConnection.query(
      likeCareerQuery,
      [userId, careerId],
      (error, response) => {
        if (error) {
          console.log('Like career error: ', error);
          reject(error);
        }
        resolve(response.rows);
      }
    );
  });
};

module.exports = likeCareer;
