const dbConnection = require('../db_connection');

const addCareerGrade = (data, callback) => {
  const uniGradeQuery = `
  INSERT INTO universities_careers
  (uni_id, career_id, grade_bagrut, grade_psychometric, grade_tawjihi)
  VALUES
  (1, $1, $2, $3, $4),
  (2, $1, $5, $6, $7),
  (3, $1, $8, $9, $10),
  (4, $1, $11, $12, $13),
  (5, $1, $14, $15, $16),
  (6, $1, $17, $18, $19);`;

  const bagrutGrades = data.grade_bagrut;
  const psychGrades = data.grade_psychometric;
  const tawjihiGrades = data.grade_tawjihi;

  const gradeInputs = bagrutGrades.reduce((acc, cur, index) =>
    acc.concat([cur, psychGrades[index], tawjihiGrades[index]])
  );

  console.log(gradeInputs.length);

  // dbConnection.query(uniGradeQuery, gradeInputs);
};
