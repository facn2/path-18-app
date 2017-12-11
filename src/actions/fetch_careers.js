import axios from 'axios';
import { FETCH_CAREERS } from '../constants';

export const fetchCareers = () => {
  return dispatch => {
    dispatch({
      type: FETCH_CAREERS,
      payload: axios.get('/api/careers'),
    });
  };
};
