import { combineReducers } from 'redux';
import fetchCareersReducer from './reducer_fetch_careers';

const rootReducers = combineReducers({
  careers: fetchCareersReducer,
});

export default rootReducers;
