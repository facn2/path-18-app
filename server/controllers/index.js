const express = require('express');
const path = require('path');
const passport = require('passport');
require('env2')('./config.env');
const router = express.Router();
const axios = require('axios');
const Strategy = require('passport-facebook').Strategy;
const jwt = require('jsonwebtoken');

const {
  allCareers,
  likedCareers,
  likeCareer,
  unlikeCareer,
  careerDetails,
} = require('./api');

const { addCareerController, addCareer } = require('./addCareer');
const getUsersByFb = require('../../database/queries/get_users_fb');
const addNewUser = require('../../database/queries/add_new_user');

router.use(passport.initialize());
router.use(passport.session());
// router.use(passport.authenticate());

passport.use(
  new Strategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: 'http://localhost:4000/__/auth/facebook',
    },
    (accessToken, refreshToken, profile, cb) => {
      getUsersByFb(profile.id, (error, response) => {
        if (error) {
          // TODO redirect to login with error message?
          console.log(error);
        } else if (!response.length) {
          // user doesn't exist
          // TODO add new users
          console.log('User does not exist');
          return addNewUser(
            profile.id,
            profile.displayName,
            (error, response) => {
              if (error) console.log(error);
              // TODO something should happen here
              // TODO redirect to fill in grades form
              console.log('New user ids: ', response);
              return cb(null, response[0]);
            }
          );
        }
        cb(null, { id: response[0].id, fb_id: response[0].fb_id });
      });
    }
  )
);

passport.serializeUser((user, done) => {
  console.log('Serialise user: ', user);
  done(null, user);
});

passport.deserializeUser((user, done) => {
  console.log('Deserialise user: ', user);
  getUsersByFb(user.fb_id, (error, response) => {
    if (error) {
      console.log(error);
    } else if (!response.length) {
      return console.log('User does not exist');
    }
    console.log('confirmed user!');
    done(null, user);
  });
});

router.get(
  '/__/auth/facebook',
  passport.authenticate('facebook', {
    successRedirect: '/careers',
    failureRedirect: '/login',
  })
);

const authenticateUser = (req, res, next) => {
  console.log('Auth');
  console.log(req.user);
  if (req.user) return next();
  res.status(401).send({ error: 'Unauthorised' });
};

router.get('/__/hello/facebook', passport.authenticate('facebook'));

router.get('/__/add/career', addCareerController);

router.get('/api/careers', authenticateUser, allCareers);

router.get('/api/careers/liked', authenticateUser, likedCareers);

router.post('/api/career/like', authenticateUser, likeCareer);

router.delete('/api/career/like/:id', authenticateUser, unlikeCareer);

router.get('/api/details/:id', authenticateUser, careerDetails);

router.post('/add-career', authenticateUser, addCareer);

router.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'assets', 'index.html'));
});

module.exports = router;
