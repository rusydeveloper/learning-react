import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

const allReducers = history =>
  combineReducers({
    router: connectRouter(history),
    counter: counterReducer,
    isLogged: loggedReducer
  });
export default allReducers;
