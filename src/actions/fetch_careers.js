import axios from 'axios';
import { FETCH_CAREERS, FETCH_CAREER_BY_ID } from '../constants';

export const fetchCareers = () => {
  return dispatch => {
    dispatch({
      type: FETCH_CAREERS,
      payload: axios.get('/api/careers'),
    });
  };
};

export const fetchCareerById = id => {
  console.log(id);
  return dispatch => {
    dispatch({
      type: FETCH_CAREER_BY_ID,
      payload: axios.get(`/api/career/${id.career_id}`),
    });
  };
};
