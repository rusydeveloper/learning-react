import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import createRootReducer from "./reducers";
import thunk from "redux-thunk";

export const history = createBrowserHistory();

export default function configureStore(allReducer) {
  const composeEnhancer =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    createRootReducer(history),

    allReducer,
    composeEnhancer(applyMiddleware(thunk, routerMiddleware(history)))
  );

  // Hot reloading
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("./reducers", () => {
      store.replaceReducer(createRootReducer(history));
    });
  }

  return store;
}
