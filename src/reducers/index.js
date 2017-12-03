import { combineReducers } from 'redux';
import fetchCareersReducer from './reducer_fetch_careers';
import likeCareerReducer from './reducer_like_career';

const rootReducers = combineReducers({
  careers: fetchCareersReducer,
  likedCareers: likeCareerReducer,
});

export default rootReducers;
