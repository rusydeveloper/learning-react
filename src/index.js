import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { loadUserFromStorage, loadBusinessFromStorage } from "../src/actions";

import configureStore, { history } from "./configureStore";

const store = configureStore();

const user = localStorage.getItem("user");
const business = localStorage.getItem("business");
if (user) {
  store.dispatch(loadUserFromStorage(user));
  store.dispatch(loadBusinessFromStorage(business));
}

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
