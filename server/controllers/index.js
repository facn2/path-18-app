const express = require('express');
const path = require('path');
const passport = require('passport');
require('env2')('./config.env');
const router = express.Router();
const axios = require('axios');
const Strategy = require('passport-facebook').Strategy;

const { allCareers, likedCareers, likeCareer, unlikeCareer } = require('./api');

const { addCareerController, addCareer } = require('./addCareer');

router.use(passport.initialize());
router.use(passport.session());

passport.use(
  new Strategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: 'http://localhost:4000/auth/facebook',
    },
    function(accessToken, refreshToken, profile, cb) {
      console.log('HELLO!');
      return cb(null, profile);
    }
  )
);

router.get(
  '/auth/facebook',
  passport.authenticate('facebook', {
    successRedirect: 'http://localhost:3000/',
    failureRedirect: '/login',
  })
);

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

router.get('/', addCareerController);

router.get('/api/careers', allCareers);

router.get('/api/careers/liked', likedCareers);

router.post('/api/career/like', likeCareer);

// router.get('/auth/facebook', passport.authenticate('facebook'));
// router.get(
//   '/auth/facebook/callback',
//   passport.authenticate('facebook', {
//     successRedirect: '/wooo',
//     failureRedirect: '/login',
//   })
// );

router.delete('/api/career/like/:id', unlikeCareer);

router.post('/add-career', addCareer);

module.exports = router;
