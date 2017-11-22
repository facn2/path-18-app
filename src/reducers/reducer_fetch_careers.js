const fetchCareers = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_CAREERS':
      return action.payload;
    default:
      return state;
  }
};
