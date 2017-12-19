const dbConnection = require('../db_connection');

const addNewUser = (fbId, name, callback) => {
  const addNewUserQuery = `
    INSERT INTO users(fb_id, name)
    VALUES ($1, $2)
    RETURNING id, fb_id;
  `;

  dbConnection.query(addNewUserQuery, [fbId, name], (error, response) => {
    if (error) {
      console.log('Add new user error: ', error);
      return callback(error);
    }
    return callback(null, response.rows);
  });
};

module.exports = addNewUser;
