const { getAllUserCareers } = require('../../database/queries/get_all_careers');
const getLikedCareersDb = require('../../database/queries/get_liked_careers');
const likeCareerDb = require('../../database/queries/like_career');
const unlikeCareerDb = require('../../database/queries/unlike_career');
const getCareerById = require('../../database/queries/career_by_id');
const { getUniByCareerId } = require('../../database/queries/get_career_uni');
const getUserGrades = require('../../database/queries/get_user_grades');

const allCareers = async (request, response) => {
  const userId = request.user.id;
  try {
    const careers = await getAllUserCareers(userId);
    response.send(careers);
  } catch (error) {
    console.log(error);
    response.send({ error: 'Error getting all careers' });
  }
};

const careerDetails = async (request, response) => {
  const careerId = request.params.id;
  const userId = request.user.id;
  const details = {};
  try {
    details.career = await getCareerById(careerId);
    details.uniGrades = await getUniByCareerId(careerId);
    details.userGrades = await getUserGrades(userId);
    response.send(details);
  } catch (error) {
    console.log(error);
    response.send({ error: 'Error getting career details' });
  }
};

const likedCareers = async (request, response) => {
  const userId = request.user.id;
  try {
    const careers = await getLikedCareersDb(userId);
    response.send(careers);
  } catch (error) {
    console.log(error);
    response.send({ error: 'Error getting liked careers' });
  }
};

const likeCareer = async (request, response) => {
  const userId = request.user.id;
  const careerId = request.body.career_id;
  try {
    const like = await likeCareerDb(userId, careerId);
    response.send(like);
  } catch (error) {
    console.log(error);
    response.send({ error: 'Error liking career' });
  }
};

const unlikeCareer = async (request, response) => {
  const userId = request.user.id;
  const careerId = request.params.id;
  try {
    const unlike = await unlikeCareerDb(userId, careerId);
    response.send(unlike);
  } catch (error) {
    console.log(error);
    response.send({ error: 'Error unliking career' });
  }
};

module.exports = {
  allCareers,
  likedCareers,
  likeCareer,
  unlikeCareer,
  careerDetails,
};
