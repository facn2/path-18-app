const updateUserGrades = require('../../database/queries/update_user');

module.exports.update = async (req, res) => {
  const { bagrut_grade, psychometric_grade, tawjihi_grade } = req.body;

  try {
    await updateUserGrades(req.user.id, [
      bagrut_grade || 0,
      psychometric_grade || 0,
      tawjihi_grade || 0,
    ]);

    res.send('Success');
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports.userDetails = (req, res) => {
  const { grade_bagrut, grade_psychometric, grade_tawjihi } = req.user;

  res.send({
    bagrut: grade_bagrut,
    psychometric: grade_psychometric,
    tawjihi: grade_tawjihi,
  });
};
