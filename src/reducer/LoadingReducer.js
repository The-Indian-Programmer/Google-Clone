const initialState = false;
const LoadingState = (state = initialState, action) => {
  switch (action.type) {
    case "SETLOADING":
      state = action.payload;
      return state;
      break;

    default:
      return state;
      break;
  }
};

export default LoadingState;
