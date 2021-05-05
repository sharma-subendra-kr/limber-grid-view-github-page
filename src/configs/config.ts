import "regenerator-runtime/runtime";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from "history";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
import { routerMiddleware } from "connected-react-router";

import createRootReducer from "./reducers";
import sagas from "./sagas";

const customHistory = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = composeWithDevTools({});

const store = createStore(
	createRootReducer(customHistory),
	composeEnhancers(
		applyMiddleware(sagaMiddleware, routerMiddleware(customHistory))
	)
);

sagaMiddleware.run(sagas);

export { store, customHistory };
