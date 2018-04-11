const { getAllCareers } = require('../../database/queries/get_all_careers');

const allCareersPage = async (req, res) => {
  try {
    const careers = await getAllCareers();
    res.render('allCareers', { careers });
  } catch (e) {
    res.send(e);
  }
};

module.exports = { allCareersPage };
