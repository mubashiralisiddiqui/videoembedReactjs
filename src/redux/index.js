import { createStore, combineReducers } from "redux";
import AppReducer from "./reducers";

export default createStore(
  combineReducers({
    AppReducer
  })
);
