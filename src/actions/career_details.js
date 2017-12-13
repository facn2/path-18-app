import axios from 'axios';
import { FETCH_DETAILS } from '../constants';

export const fetchDetails = id => {
  return dispatch => {
    dispatch({
      type: FETCH_DETAILS,
      payload: axios.get(`/api/details/${id.career_id}`),
    });
  };
};
