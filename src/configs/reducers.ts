import { combineReducers } from "redux";

import { homeReducer } from "../pages/home/ducks";
import { drawerReducer } from "src/common/components/static/drawer/ducks";

const reducer = combineReducers({
	// exampleReducer
	homeReducer,
	drawerReducer,
});

export default reducer;
