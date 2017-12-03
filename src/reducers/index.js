import { combineReducers } from 'redux';
import fetchCareersReducer from './reducer_fetch_careers';
import fetchLikedCareers from './reducer_fetch_liked_careers';

const rootReducers = combineReducers({
  careers: fetchCareersReducer,
  matchedCareers: fetchLikedCareers,
});

export default rootReducers;
