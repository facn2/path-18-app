import {
  FETCH_LIKED_CAREERS_PENDING,
  FETCH_LIKED_CAREERS_FULFILLED,
  FETCH_LIKED_CAREERS_REJECTED,
} from '../constants';

const initialState = {
  likedCareers: [],
  isFetching: false,
  dataFetched: false,
  error: false,
};

const fetchLikedCareersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LIKED_CAREERS_PENDING:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_LIKED_CAREERS_FULFILLED:
      return {
        ...state,
        isFetching: false,
        dataFetched: true,
        likedCareers: action.payload.data,
      };
    case FETCH_LIKED_CAREERS_REJECTED:
      return {
        ...state,
        isFetching: false,
        dataFetched: false,
        error: true,
      };
    default:
      return state;
  }
};

export default fetchCareersReducer;
