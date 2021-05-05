import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { homeReducer } from "../pages/home/ducks";
import { drawerReducer } from "src/common/components/static/drawer/ducks";

const createRootReducer = (customHistory) =>
	combineReducers({
		// ...exampleReducer
		router: connectRouter(customHistory),
		homeReducer,
		drawerReducer,
	});

export default createRootReducer;
