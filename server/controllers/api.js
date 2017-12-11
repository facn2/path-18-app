const getAllCareersDb = require('../../database/queries/get_all_careers');
const getLikedCareersDb = require('../../database/queries/get_liked_careers');
const likeCareerDb = require('../../database/queries/like_career');
const unlikeCareerDb = require('../../database/queries/unlike_career');
const getCareerById = require('../../database/queries/career_by_id');
const getUniByCareerId = require('../../database/queries/get_career_uni');
const getUserGrades = require('../../database/queries/get_user_grades');

const allCareers = (request, response) => {
  const userId = 1;
  getAllCareersDb(userId, (error, result) => {
    if (error) {
      return response.send(error);
    }
    response.send(result);
  });
};

const careerDetails = (request, response) => {
  const careerId = request.params.id;
  const userId = 1;
  const details = {};
  getCareerById(careerId, (error, result) => {
    if (error) {
      return response.send(error);
    }
    details.career = result;
    getUniByCareerId(careerId, (error, result) => {
      if (error) {
        return response.send(error);
      }
      details.uniGrades = result;
      getUserGrades(userId, (error, result) => {
        if (error) {
          return response.send(error);
        }
        details.userGrades = result;
        response.send(details);
      });
    });
  });
};

const likedCareers = (request, response) => {
  const userId = 1;
  getLikedCareersDb(userId, (error, result) => {
    if (error) {
      return response.send(error);
    }
    response.send(result);
  });
};

const likeCareer = (request, response) => {
  const userId = 1;
  const careerId = request.body.career_id;
  likeCareerDb(userId, careerId, (error, result) => {
    if (error) {
      return response.send(error);
    }
    response.send(result);
  });
};

const unlikeCareer = (request, response) => {
  const userId = 1;
  const careerId = request.params.id;
  unlikeCareerDb(userId, careerId, (error, result) => {
    if (error) {
      return response.send(error);
    }
    response.send(result);
  });
};

module.exports = {
  allCareers,
  likedCareers,
  likeCareer,
  unlikeCareer,
  careerDetails,
};
