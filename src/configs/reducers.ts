import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { homeReducer } from "../pages/home/ducks";
import { drawerReducer } from "src/common/components/static/drawer/ducks";
import { orderNowReducer } from "src/common/components/complex/orderNow/ducks";
import { switchToDesktopReducer } from "src/common/components/static/switchToDesktop/ducks";
import { howToUseReducer } from "src/common/components/static/howToUse/ducks";

const createRootReducer = (customHistory) =>
	combineReducers({
		// ...exampleReducer
		router: connectRouter(customHistory),
		homeReducer,
		drawerReducer,
		orderNowReducer,
		switchToDesktopReducer,
		howToUseReducer,
	});

export default createRootReducer;
