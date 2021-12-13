import counter from "./counterReducer.js";
import auth from "./authReducer.js";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter,
  auth,
});
export default allReducers;