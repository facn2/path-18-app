const dbConnection = require('../db_connection');

const likeCareer = (data, callback) => {
  const likeCareerQuery = `INSERT INTO users_careers(user_id, career_id) VALUES($1, $2) RETURNING (user_id, career_id)`;
  dbConnection.query(likeCareerQuery, data, (error, response) => {
    if (error) {
      console.log(error);
      return callback(error);
    }
    callback(null, response.rows);
  });
};

module.exports = likeCareer;
