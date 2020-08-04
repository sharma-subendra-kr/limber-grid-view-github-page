import "regenerator-runtime/runtime";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from "history";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";

import reducers from "./reducers";
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

const t = sagaMiddleware.run(sagas);
console.log("t", t);

const customHistory = createBrowserHistory();

export { store, customHistory };
