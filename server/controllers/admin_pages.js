const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { getAllCareers } = require('../../database/queries/get_all_careers');
const getCareer = require('../../database/queries/career_by_id');
const {
  getUniByCareerId,
  getSpecificCareerUnibyId,
} = require('../../database/queries/get_career_uni');
const findAdminByUsername = require('../../database/queries/get_admin');
const {
  updateCareerSpecificUni,
  updateCareerDetails,
} = require('../../database/queries/update_career');

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

const adminLoginPage = (req, res) => {
  res.render('adminLogin');
};

const adminLogin = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.render('adminLogin', {
      error: 'Please input the username and password',
    });
  } else {
    try {
      const rows = await findAdminByUsername(username);

      if (!rows.length) {
        res.render('adminLogin', { error: 'username does not exist' });
      }

      const comparision = bcrypt.compare(password, rows[0].password);

      if (!comparision) {
        res.render('adminLogin', { error: 'wrong password!' });
      }

      const token = await jwt.sign(
        { username, role: rows[0].role },
        process.env.JWT_SECRET,
      );

      res.cookie('access', token, { maxAge: 604800000 });
      res.redirect('/__/allCareesPage');
    } catch (e) {
      res.render('adminLogin', { error: 'an error occurred' });
    }
  }
};

const verifyAdminMiddleware = async (req, res, next) => {
  try {
    const { username } = await jwt.verify(
      req.cookies.access,
      process.env.JWT_SECRET,
    );
    const userQuery = await findAdminByUsername(username);

    if (userQuery[0]) {
      next();
    } else res.redirect('/admin');
  } catch (err) {
    res.redirect('/admin');
  }
};

const renderSingleUni = async (req, res) => {
  try {
    const uni = await getSpecificCareerUnibyId(
      req.params.careerId,
      req.params.uniId,
    );
    const career = await getCareer(req.params.careerId);
    res.render('updateUni', { career: career[0], uni: uni[0] });
  } catch (e) {
    console.log(e);
  }
};

const updateUni = async (req, res) => {
  const { uniId, careerId } = req.params;
  const { bagrut, psychometric, tawjihi } = req.body;
  try {
    await updateCareerSpecificUni(
      uniId,
      careerId,
      bagrut || null,
      psychometric || null,
      tawjihi || null,
    );

    res.redirect(`/__/career/${req.params.careerId}`);
  } catch (err) {
    console.log(err);
  }
};

const updateCareerPage = async (req, res) => {
  try {
    const career = await getCareer(req.params.id);
    res.render('updateCareer', { career: career[0] });
  } catch (err) {
    console.log(err);
  }
};

const updateCareer = async (req, res) => {
  try {
    await updateCareerDetails(req.params.id, req.body);
    res.redirect(`/__/career/${req.params.id}`);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  allCareersPage,
  singleCareerPage,
  adminLoginPage,
  adminLogin,
  verifyAdminMiddleware,
  renderSingleUni,
  updateUni,
  updateCareerPage,
  updateCareer,
};
