const express = require('express');
const path = require('path');
const passport = require('passport');
require('env2')('./config.env');
const router = express.Router();
const axios = require('axios');
const Strategy = require('passport-facebook').Strategy;
const jwt = require('jsonwebtoken');
const user = require('./user.js');

const callbackURL =
  process.env.NODE_ENV === 'production'
    ? 'https://path18.herokuapp.com/__/auth/facebook'
    : 'http://localhost:4000/__/auth/facebook';

const {
  allCareers,
  likedCareers,
  likeCareer,
  unlikeCareer,
  careerDetails
} = require('./api');

const { addCareerController, addCareer } = require('./addCareer');
const getUsersByFb = require('../../database/queries/get_users_fb');
const addNewUser = require('../../database/queries/add_new_user');

passport.use(
  new Strategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: callbackURL
    },
    (accessToken, refreshToken, profile, cb) => {
      getUsersByFb(profile.id, (error, response) => {
        if (error) {
          // TODO redirect to login with error message?
        } else if (!response.length) {
          return addNewUser(
            profile.id,
            profile.displayName,
            (error, response) => {
              if (error) console.log(error);
              // TODO redirect to fill in grades form
              return cb(null, response[0]);
            }
          );
        }
        cb(null, response[0]);
      });
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.fb_id);
});

passport.deserializeUser((fb_id, done) => {
  getUsersByFb(fb_id, (error, response) => {
    if (error) {
      console.log(error);
    } else if (!response.length) {
      return console.log('User does not exist');
    }
    done(null, response[0]);
  });
});

router.get(
  '/__/auth/facebook',
  passport.authenticate('facebook'),
  (req, res) => {
    if (!req.user.id) {
      res.redirect('/login');
    } else if (
      req.user.grade_bagrut ||
      req.user.grade_tawjihi ||
      req.user.grade_psychometri
    ) {
      res.redirect('/careers');
    } else {
      res.redirect(`/user/grades/${req.user.id}`);
    }
  }
);

router.get('/__/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      console.log(err);
      return next(err);
    }
    req.logOut();
    res.clearCookie();
    res.redirect('/');
  });
});

const authenticateUser = (req, res, next) => {
  if (req.user) return next();
  res.status(401).send({ error: 'Unauthorised' });
};

router.get('/__/hello/facebook', passport.authenticate('facebook'));

router.get('/__/add/career', addCareerController);

router.put('/__/user/grades', authenticateUser, user.update);

router.get('/api/careers', authenticateUser, allCareers);

router.get('/api/careers/liked', authenticateUser, likedCareers);

router.post('/api/career/like', authenticateUser, likeCareer);

router.delete('/api/career/like/:id', authenticateUser, unlikeCareer);

router.get('/api/details/:id', authenticateUser, careerDetails);

router.post('/add-career', addCareer);

router.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'assets', 'index.html'));
});

module.exports = router;
