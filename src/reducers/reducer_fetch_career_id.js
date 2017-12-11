import {
  FETCH_CAREER_BY_ID_PENDING,
  FETCH_CAREER_BY_ID_FULFILLED,
  FETCH_CAREER_BY_ID_REJECTED,
} from '../constants';

const initialState = {
  career: [],
  dataFetched: false,
  isFetching: false,
  error: false,
};

const fetchCareerByIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CAREER_BY_ID_PENDING:
      return {
        ...state,
        career: [],
        isFetching: true,
        dataFetched: false,
      };
    case FETCH_CAREER_BY_ID_FULFILLED:
      return {
        ...state,
        career: action.payload.data,
        isFetching: false,
        dataFetched: true,
      };
    case FETCH_CAREER_BY_ID_REJECTED:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
};

export default fetchCareerByIdReducer;
