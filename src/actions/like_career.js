import axios from 'axios';
import LIKE_CAREER from '../constants';

const likeCareer = () => {
  return dispatch => {
    dispatch({
      type: LIKE_CAREER,
      payload: axios.post('/api/career/like'),
    });
  };
};
