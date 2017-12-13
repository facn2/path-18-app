const dbConnection = require('../db_connection');

const getUniByCareerId = (careerId, callback) => {
  const getUniByCareerIdQuery = `
    SELECT * FROM universities_careers UC
    JOIN universities U ON UC.uni_id = U.id
    WHERE UC.career_id = $1;
  `;

  dbConnection.query(getUniByCareerIdQuery, [careerId], (error, response) => {
    if (error) {
      console.log('Fetch uni by id error: ', error);
      return callback(error);
    }
    callback(null, response.rows);
  });
};

module.exports = getUniByCareerId;
