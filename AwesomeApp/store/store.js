import logger from "redux-logger";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "../Reducers/rootReducer/rootReducer";
import fetchUsersSagaMonitor from "../sagas/fetchUsers";

const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(logger, sagaMiddleware);
const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(
  rootReducer, // combined reducer
  compose(middleware)
  // compose(middleware, reduxDevTools)
);

sagaMiddleware.run(fetchUsersSagaMonitor);
