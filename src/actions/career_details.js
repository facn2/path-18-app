import axios from 'axios';
import { FETCH_DETAILS } from '../constants';

export const fetchDetails = id => {
  return dispatch => {
    dispatch({
      type: FETCH_DETAILS,
      payload: axios.get(`/api/details/${id.career_id}`).then(res => {
        if (res.status !== 200) throw new Error('Bad status code');
        return res;
      }),
    }).catch(error => {
      console.log(error);
    });
  };
};
