import axios from 'axios';
import { FETCH_LIKED_CAREERS, UNLIKE_CAREER } from '../constants';

export const fetchLikedCareers = () => {
  return dispatch => {
    dispatch({
      type: FETCH_LIKED_CAREERS,
      payload: axios.get('/api/careers/liked'),
    });
  };
};

export const unlikeCareer = data => {
  console.log(data);
  return dispatch => {
    dispatch({
      type: UNLIKE_CAREER,
      payload: axios.delete('api/career/like', data),
    });
  };
};
