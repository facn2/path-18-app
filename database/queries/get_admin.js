const dbConnection = require('../db_connection');

const findAdminByUsername = username => {
  const query = `SELECT * FROM admins WHERE username = $1`;

  return new Promise((resolve, reject) =>
    dbConnection.query(query, [username], (error, response) => {
      if (error) {
        console.log('Find admin by username error: ', error);
        return reject(error);
      }
      resolve(response.rows);
    }),
  );
};

module.exports = findAdminByUsername;
