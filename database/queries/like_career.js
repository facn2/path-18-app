const dbConnection = require('../db_connection');

const likeCareer = (userId, careerId, callback) => {
  const likeCareerQuery = `
    INSERT INTO users_careers(user_id, career_id)
    VALUES($1, $2)
    RETURNING (user_id, career_id);`;

  dbConnection.query(likeCareerQuery, [userId, careerId], (error, response) => {
    if (error) {
      console.log('Like career error: ', error);
      return callback(error);
    }
    callback(null, response.rows);
  });
};

module.exports = likeCareer;
