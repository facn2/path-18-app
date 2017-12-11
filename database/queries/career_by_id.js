const dbConnection = require('../db_connection');

const getCareerById = (careerId, callback) => {
  const getCareerByIdQuery = `
    SELECT * FROM careers
    WHERE careers.id = $1;
  `;

  dbConnection.query(getCareerByIdQuery, [careerId], (error, response) => {
    if (error) {
      console.log('Fetch career by id error: ', error);
      return callback(error);
    }
    callback(null, response.rows);
  });
};

module.exports = getCareerById;
