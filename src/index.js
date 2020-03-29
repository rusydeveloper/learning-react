import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

import configureStore, { history } from "./configureStore";

const store = configureStore();

// export const history = createBrowserHistory();

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// // const store = createStore(allReducer, composeEnhancer(applyMiddleware(thunk)));

// const store = createStore(
//   // createRootReducer(history), // root reducer with router state
//   allReducer,
//   compose(
//     applyMiddleware(
//       routerMiddleware(history), // for dispatching history actions
//       applyMiddleware(thunk),
//       composeEnhancer
//       // ... other middlewares ...
//     )
//   )
// );

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
serviceWorker.register();
