const updateUserGrades = require('../../database/queries/update_user');

module.exports.update = async (req, res) => {
  console.log(req.body);
  const { id, bagrut_grade, psychometric_grade, tawjihi_grade } = req.body;

  try {
    await updateUserGrades(id, [
      bagrut_grade || 0,
      psychometric_grade || 0,
      tawjihi_grade || 0,
    ]);

    res.send('Success');
  } catch (error) {
    res.send({ error: error.message });
  }
};
