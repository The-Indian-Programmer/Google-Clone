import searchState from "./search";
import LoadingState from "./LoadingReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  searchState,
  LoadingState,
});

export default rootReducer;
