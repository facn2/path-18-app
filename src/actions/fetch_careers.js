import axios from 'axios';

const fetchCareers = () => {
  const request = axios.get('/api/careers');
  return dispatch => {
    request.then(({ data }) => {
      dispatch({ type: 'FETCH_CAREERS', payload: data });
    });
  };
};

export default fetchCareers;
