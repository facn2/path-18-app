const dbConnection = require('../db_connection');

const getUsersByFb = (fbId, callback) => {
  const getUsersByFbQuery = `
    SELECT * FROM users
    WHERE fb_id = $1;
  `;

  dbConnection.query(getUsersByFbQuery, [fbId], (error, response) => {
    if (error) {
      console.log('Get users by fb error: ', error);
      return callback(error);
    }
    callback(null, response.rows);
  });
};

module.exports = getUsersByFb;
