const dbConnection = require('../db_connection');

const addAdminQuery = (username, password, role) => {
  const query = `INSERT INTO admins (username, password, role) VALUES ($1, $2, $3);`;

  return new Promise((resolve, reject) =>
    dbConnection.query(query, [username, password, role], (error, response) => {
      if (error) {
        console.log('Add admin error', error);
        reject(error);
      } else {
        resolve(response.rows);
      }
    }),
  );
};

module.exports = { addAdminQuery };
