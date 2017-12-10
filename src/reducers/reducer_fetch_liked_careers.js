import {
  FETCH_LIKED_CAREERS_PENDING,
  FETCH_LIKED_CAREERS_FULFILLED,
  FETCH_LIKED_CAREERS_REJECTED,
  UNLIKE_CAREER_PENDING,
  UNLIKE_CAREER_REJECTED,
  UNLIKE_CAREER_FULFILLED,
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
    case UNLIKE_CAREER_PENDING:
      return {
        ...state,
        isFetching: true,
        dataFetched: false,
        likedCareers: state.likedCareers.map(career => {
          return career.id === action.meta.id
            ? { ...career, isDeleting: true }
            : career;
        }),
      };
    case UNLIKE_CAREER_FULFILLED:
      return {
        ...state,
        isFetching: false,
        dataFetched: true,
        likedCareers: state.likedCareers.filter(career => {
          return career.id !== action.payload.data[0].career_id;
        }),
      };
    case UNLIKE_CAREER_REJECTED:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
};

export default fetchLikedCareersReducer;
