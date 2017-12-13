const dbConnection = require('../db_connection');

const getCareerById = careerId => {
  const getCareerByIdQuery = `
    SELECT * FROM careers
    WHERE careers.id = $1;
  `;

  return new Promise((resolve, reject) => {
    dbConnection.query(getCareerByIdQuery, [careerId], (error, response) => {
      if (error) {
        console.log('Fetch career by id error: ', error);
        reject(error);
      }
      resolve(response.rows);
    });
  });
};

module.exports = getCareerById;
