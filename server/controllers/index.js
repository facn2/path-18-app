const express = require('express');
const path = require('path');
const router = express.Router();

const {
  allCareers,
  likedCareers,
  likeCareer,
  unlikeCareer,
  careerDetails,
} = require('./api');

const { addCareerController, addCareer } = require('./addCareer');

router.get('/', addCareerController);

router.get('/api/careers', allCareers);

router.get('/api/careers/liked', likedCareers);

router.post('/api/career/like', likeCareer);

router.delete('/api/career/like/:id', unlikeCareer);

router.get('/api/details/:id', careerDetails);

router.post('/add-career', addCareer);

module.exports = router;
