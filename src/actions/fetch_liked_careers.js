import axios from 'axios';
import FETCH_LIKED_CAREERS from '../constants';

const fetchLikedCareers = () => {
  return dispatch => {
    dispatch({
      type: FETCH_LIKED_CAREERS,
      payload: axios.get('/api/careers/liked'),
    });
  };
};

export default fetchLikedCareers;
