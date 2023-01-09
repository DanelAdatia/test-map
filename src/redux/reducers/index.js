import { combineReducers } from "redux";
import { displayReduce } from "./DisplayReducer";

const reducers = combineReducers({
  displayData: displayReduce,
});

export default reducers;
