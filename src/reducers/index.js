import { combineReducers } from 'redux';
import fetchCareersReducer from './reducer_fetch_careers';
import fetchLikedCareers from './reducer_fetch_liked_careers';
import likeCareerReducer from './reducer_like_career';

const rootReducers = combineReducers({
  careers: fetchCareersReducer,
  matchedCareers: fetchLikedCareers,
  likeCareer: likeCareerReducer,
  unlikeCareer: fetchLikedCareers,
});

export default rootReducers;
