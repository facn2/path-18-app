const dbConnection = require('../db_connection');

const getAllCareers = callback => {
  const allCareersQuery = 'SELECT * FROM careers;';
  dbConnection.query(allCareersQuery, (error, response) => {
    if (error) {
      return callback(error);
    } else {
      callback(null, response.rows);
    }
  });
};

module.exports = getAllCareers;
