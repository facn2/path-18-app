const dbConnection = require('../db_connection');

const getUniByCareerId = careerId => {
  const query = `
    SELECT * FROM universities_careers UC
    JOIN universities U ON UC.uni_id = U.id
    WHERE UC.career_id = $1;
  `;

  return new Promise((resolve, reject) =>
    dbConnection.query(query, [careerId], (error, response) => {
      if (error) {
        console.log('Fetch uni by id error: ', error);
        return reject(error);
      }
      resolve(response.rows);
    }),
  );
};

const getSpecificCareerUnibyId = (careerId, uniId) => {
  const query = `
    SELECT * FROM universities_careers UC
    JOIN universities U ON UC.uni_id = U.id
    WHERE UC.career_id = $1 AND UC.uni_id = $2;
  `;

  return new Promise((resolve, reject) =>
    dbConnection.query(query, [careerId, uniId], (error, response) => {
      if (error) {
        console.log('Fetch career specific uni by id error: ', error);
        return reject(error);
      }

      resolve(response.rows);
    }),
  );
};

module.exports = { getUniByCareerId, getSpecificCareerUnibyId };
