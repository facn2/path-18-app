import axios from 'axios';
import { FETCH_CAREERS, LIKE_CAREER } from '../constants';

export const fetchCareers = () => {
  return dispatch => {
    dispatch({
      type: FETCH_CAREERS,
      payload: axios.get('/api/careers').then(res => {
        if (res.status !== 200) throw new Error('Bad status code');
        return res;
      }),
    }).catch(error => {
      console.log(error);
    });
  };
};

export const likeCareer = data => {
  return dispatch => {
    dispatch({
      type: LIKE_CAREER,
      payload: axios.post('/api/career/like', data).then(res => {
        if (res.status !== 200) throw new Error('Bad status code');
        return res;
      }),
    }).catch(error => {
      console.log(error);
    });
  };
};
