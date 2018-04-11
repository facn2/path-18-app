const {
  getAllCareers,
  getCareer,
} = require('../../database/queries/get_all_careers');

const allCareersPage = async (req, res) => {
  try {
    const careers = await getAllCareers();
    res.render('allCareers', { careers });
  } catch (e) {
    res.send(e);
  }
};

const singleCareerPage = async (req, res) => {
  try {
    const career = await getCareer(req.params.id);
    res.render('singleCareer', { career });
  } catch (e) {
    res.send(e);
  }
};

module.exports = { allCareersPage };
