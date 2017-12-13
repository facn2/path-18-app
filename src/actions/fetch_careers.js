import axios from 'axios';
import { FETCH_CAREERS } from '../constants';

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
