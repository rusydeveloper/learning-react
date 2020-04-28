import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import loggedReducer from "./isLogged";
import userReducer from "./user";
import cartReducer from "./cart";
import orderReducer from "./order";
import productReducer from "./product";
import campaignReducer from "./campaign";
import businessReducer from "./business";

const allReducers = (history) =>
  combineReducers({
    router: connectRouter(history),
    isLogged: loggedReducer,
    user: userReducer,
    business: businessReducer,
    product: productReducer,
    cart: cartReducer,
    order: orderReducer,
    campaign: campaignReducer,
  });
export default allReducers;
