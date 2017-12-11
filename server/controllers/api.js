const getAllCareersDb = require('../../database/queries/get_all_careers');
const getLikedCareersDb = require('../../database/queries/get_liked_careers');
const likeCareerDb = require('../../database/queries/like_career');
const unlikeCareerDb = require('../../database/queries/unlike_career');

const allCareers = (request, response) => {
  const userId = 1;
  getAllCareersDb(userId, (error, result) => {
    if (error) {
      return response.send(error);
    }
    response.send(result);
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
};
