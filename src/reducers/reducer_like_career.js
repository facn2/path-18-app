import {
  LIKE_CAREER_PENDING,
  LIKE_CAREER_REJECTED,
  LIKE_CAREER_FULFILLED,
} from '../constants';

const initialState = {
  likedCareers: [],
  dataFetched: false,
  isFetching: false,
  error: false,
};

const likeCareerReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIKE_CAREER_PENDING:
      return {
        ...state,
        likedCareers: [],
        isFetching: true,
      };
    case LIKE_CAREER_FULFILLED:
      return {
        ...state,
        likedCareers: action.payload,
        isFetching: false,
      };
    case LIKE_CAREER_FULFILLED:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
};

export default likeCareerReducer;
