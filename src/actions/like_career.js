import axios from 'axios';
import { LIKE_CAREER } from '../constants';

const likeCareer = data => {
  return dispatch => {
    dispatch({
      type: LIKE_CAREER,
      payload: axios.post('/api/career/like', data),
    });
  };
};

export default likeCareer;
