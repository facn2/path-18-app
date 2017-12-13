import { combineReducers } from 'redux';
import fetchCareersReducer from './reducer_fetch_careers';
import fetchLikedCareers from './reducer_fetch_liked_careers';
import likeCareerReducer from './reducer_like_career';
import fetchDetailsReducer from './reducer_fetch_details';

const rootReducers = combineReducers({
  careers: fetchCareersReducer,
  matchedCareers: fetchLikedCareers,
  likeCareer: likeCareerReducer,
  unlikeCareer: fetchLikedCareers,
  careerDetail: fetchDetailsReducer,
});

export default rootReducers;
