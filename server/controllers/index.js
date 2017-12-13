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
      console.log('accessToken', accessToken);
      console.log('refreshToken', refreshToken);
      console.log('profile', profile);
      return cb(null, profile);
    }
  )
);

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

router.get(
  '/auth/facebook',
  passport.authenticate('facebook', {
    successRedirect: 'http://localhost:3000/careers',
    failureRedirect: '/login',
  })
);

router.get('/hello/facebook', (req, res) => {
  res.redirect(
    'https://www.facebook.com/v2.11/dialog/oauth?client_id=764320583760204&redirect_uri=http://localhost:4000/auth/facebook'
  );
});

router.get('/', addCareerController);

router.get('/api/careers', allCareers);

router.get('/api/careers/liked', likedCareers);

router.post('/api/career/like', likeCareer);

router.delete('/api/career/like/:id', unlikeCareer);

router.post('/add-career', addCareer);

module.exports = router;
