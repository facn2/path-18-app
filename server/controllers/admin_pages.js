const { getAllCareers } = require('../../database/queries/get_all_careers');
const getCareer = require('../../database/queries/career_by_id');
const getUniByCareerId = require('../../database/queries/get_career_uni');

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
    const unis = await getUniByCareerId(req.params.id);
    res.render('singleCareer', { career: career[0], unis });
  } catch (e) {
    res.send(e);
  }
};

module.exports = { allCareersPage, singleCareerPage };
