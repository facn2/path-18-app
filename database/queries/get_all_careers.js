const dbConnection = require('../db_connection');

const getAllCareers = callback => {
  const allCareersQuery = 'SELECT * FROM careers;';
  dbConnection.query(allCareersQuery, (error, response) => {
    if (error) {
      return callback(error);
    } else {
      console.log(response);
      callback(null, response);
    }
  });
};

module.exports = getAllCareers;
