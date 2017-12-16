import axios from 'axios';
import { FETCH_LIKED_CAREERS, UNLIKE_CAREER } from '../constants';

export const fetchLikedCareers = () => {
  return dispatch => {
    dispatch({
      type: FETCH_LIKED_CAREERS,
      payload: axios.get('/api/careers/liked').then(res => {
        if (res.status !== 200) throw new Error('Bad status code');
        return res;
      }),
    }).catch(error => {
      console.log(error);
    });
  };
};

export const unlikeCareer = data => {
  return dispatch => {
    dispatch({
      type: UNLIKE_CAREER,
      meta: { id: data.career_id },
      payload: axios.delete(`api/career/like/${data.career_id}`).then(res => {
        if (res.status !== 200) throw new Error('Bad status code');
        return res;
      }),
    }).catch(error => {
      console.log(error);
    });
  };
};
