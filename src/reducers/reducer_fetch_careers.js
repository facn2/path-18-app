import {
  FETCH_CAREERS_PENDING,
  FETCH_CAREERS_FULFILLED,
  FETCH_CAREERS_REJECTED,
} from '../constants';

const initialState = {
  careerCards: [],
  dataFetched: false,
  isFetching: false,
  error: false,
};

const fetchCareersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CAREERS_PENDING:
      return {
        ...state,
        careerCards: [],
        isFetching: true,
      };
    case FETCH_CAREERS_FULFILLED:
      return {
        ...state,
        careerCards: action.payload.data,
        isFetching: false,
        dataFetched: true,
      };
    case FETCH_CAREERS_REJECTED:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
};

export default fetchCareersReducer;
