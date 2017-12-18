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

passport.use(
  new Strategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: 'http://localhost:4000/__/auth/facebook',
    },
    (accessToken, refreshToken, profile, cb) => {
      getUsersByFb(profile.id, (error, response) => {
        console.log('hi');
        if (error) {
          // TODO redirect to login with error message?
          console.log(error);
        } else if (!response.length) {
          // TODO add new users
          console.log('User does not exist');
          return addNewUser(
            profile.id,
            profile.displayName,
            (error, response) => {
              if (error) console.log(error);
              // TODO something should happen here
              // TODO redirect to fill in grades form
              return console.log('User added');
            }
          );
        }
        // TODO set cookie using jwt with userId
        createCookieWithJwt(response[0].id);
        return console.log('User exists give this guy a cookie');
      });
      return cb(null, profile);
    }
  )
);

const createCookieWithJwt = userId => {
  jwt.sign({ userId }, process.env.SECRET, (err, token) => {
    if (err) console.log(err);
    console.log('Tokeeeennn', token);
  });
};

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

router.get(
  '/__/auth/facebook',
  passport.authenticate('facebook', {
    successRedirect: '/careers',
    failureRedirect: '/login',
  })
);

router.get('/__/hello/facebook', passport.authenticate('facebook'));

router.get('/__/add/career', addCareerController);

router.get('/api/careers', allCareers);

router.get('/api/careers/liked', likedCareers);

router.post('/api/career/like', likeCareer);

router.delete('/api/career/like/:id', unlikeCareer);

router.get('/api/details/:id', careerDetails);

router.post('/add-career', addCareer);

router.get('*', (req, res) => {
  console.log(req.url);
  console.log('THIS SHOULD NOT BE HAPPENING RIGHT NOW');
  res.sendFile(path.resolve(__dirname, '..', 'assets', 'index.html'));
});

module.exports = router;
