const dbConnection = require('../db_connection');

const addCareerGrades = (uniId, careerId, grades) => {
  const uniGradeQuery = `
  INSERT INTO universities_careers
  (uni_id, career_id, grade_bagrut, grade_psychometric, grade_tawjihi)
  VALUES
  ($1, $2, $3, $4, $5);`;

  const inputs = [
    uniId,
    careerId,
    grades.grade_bagrut,
    grades.grade_psychometric,
    grades.grade_tawjihi,
  ];

  return new Promise((resolve, reject) => {
    dbConnection.query(uniGradeQuery, inputs, (error, response) => {
      if (error) {
        console.log('Add uni grade error: ', error);
        return reject(error);
      }
      resolve(error);
    });
  });
};

module.exports = addCareerGrades;
