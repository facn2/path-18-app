const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { getAllCareers } = require('../../database/queries/get_all_careers');
const getCareer = require('../../database/queries/career_by_id');
const getUniByCareerId = require('../../database/queries/get_career_uni');
const findAdminByUsername = require('../../database/queries/get_admin.js');

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
    console.log(Object.keys(req));
    const { username } = await jwt.verify(
      req.cookies.access,
      process.env.JWT_SECRET,
    );
    const userQuery = await findAdminByUsername(username);

    if (userQuery[0]) {
      next();
    } else res.redirect('/admin');
  } catch (err) {
    console.log(err);
    res.redirect('/admin');
  }
};

module.exports = {
  allCareersPage,
  singleCareerPage,
  adminLoginPage,
  adminLogin,
  verifyAdminMiddleware,
};
