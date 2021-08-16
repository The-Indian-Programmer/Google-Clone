const initialState = null;
const searchState = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCHTERM":
      state = action.payload;
      return state;
      break;

    default:
      return state;
      break;
  }
};

export default searchState;
