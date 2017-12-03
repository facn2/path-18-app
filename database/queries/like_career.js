const dbConnection = require('../db_connection');

const likeCareer = (data, callback) => {
  const likeCareerQuery = `INSERT INTO users_careers(user_id, career_id) VALUES($1, $2)`;
  dbConnection.query(likeCareerQuery, data, (error, response) => {
    if (error) {
      callback(error);
    }
    callback(null, response.rows);
  });
};

module.exports = likeCareer;
