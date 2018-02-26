import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "../Reducers/rootReducer/rootReducer";
import fetchUsersSagaMonitor from "../sagas/fetchUsers";

const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware);

export const store = createStore(rootReducer, compose(middleware));

sagaMiddleware.run(fetchUsersSagaMonitor);
