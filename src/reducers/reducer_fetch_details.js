import {
  FETCH_DETAILS_PENDING,
  FETCH_DETAILS_FULFILLED,
  FETCH_DETAILS_REJECTED,
} from '../constants';

const initialState = {
  career: [],
  dataFetched: false,
  isFetching: false,
  error: false,
};

const fetchDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DETAILS_PENDING:
      return {
        ...state,
        career: [],
        isFetching: true,
        dataFetched: false,
      };
    case FETCH_DETAILS_FULFILLED:
      return {
        ...state,
        career: action.payload.data,
        isFetching: false,
        dataFetched: true,
      };
    case FETCH_DETAILS_REJECTED:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
};

export default fetchDetailsReducer;
