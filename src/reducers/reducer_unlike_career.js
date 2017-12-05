import {
  UNLIKE_CAREER_PENDING,
  UNLIKE_CAREER_REJECTED,
  UNLIKE_CAREER_FULFILLED,
} from '../constants';

const initialState = {
  dataFetched: false,
  isFetching: false,
  error: false,
};

const unlikeCareerReducer = (state = initialState, action) => {
  switch (action.type) {
    case UNLIKE_CAREER_PENDING:
      return {
        ...state,
        isFetching: true,
        dataFetched: false,
      };
    case UNLIKE_CAREER_FULFILLED:
      return {
        ...state,
        isFetching: false,
        dataFetched: true,
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

export default unlikeCareerReducer;
