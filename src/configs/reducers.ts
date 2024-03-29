import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { homeReducer } from "../pages/home/ducks";
import { drawerReducer } from "src/common/components/static/drawer/ducks";
import { orderNowReducer } from "src/common/components/complex/orderNow/ducks";
import { switchToDesktopReducer } from "src/common/components/static/switchToDesktop/ducks";
import { howToUseReducer } from "src/common/components/static/howToUse/ducks";
import { demoDialogReducer } from "src/common/components/static/demoDialog/ducks";
import { sendQueryReducer } from "src/common/components/complex/sendQuery/ducks";
import { developmentReducer } from "../pages/development/ducks";
import { loggerReducer } from "../pages/development/common/components/logger/ducks";

const createRootReducer = (customHistory) =>
	combineReducers({
		// ...exampleReducer
		router: connectRouter(customHistory),
		homeReducer,
		drawerReducer,
		orderNowReducer,
		switchToDesktopReducer,
		howToUseReducer,
		demoDialogReducer,
		sendQueryReducer,
		developmentReducer,
		loggerReducer,
	});

export default createRootReducer;
