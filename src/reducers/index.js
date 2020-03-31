import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import userReducer from "./user";
import cartReducer from "./cart";
import orderReducer from "./order";

const allReducers = history =>
  combineReducers({
    router: connectRouter(history),
    counter: counterReducer,
    isLogged: loggedReducer,
    user: userReducer,
    cart: cartReducer,
    order: orderReducer
  });
export default allReducers;
