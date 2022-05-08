import { all } from "redux-saga/effects";

import { homeSaga } from "../pages/home/ducks";
import { drawerSaga } from "src/common/components/static/drawer/ducks";
import { orderNowSaga } from "src/common/components/complex/orderNow/ducks";
import { switchToDesktopSaga } from "src/common/components/static/switchToDesktop/ducks";
import { howToUseSaga } from "src/common/components/static/howToUse/ducks";
import { demoDialogSaga } from "src/common/components/static/demoDialog/ducks";
import { sendQuerySaga } from "src/common/components/complex/sendQuery/ducks";
import { developmentSaga } from "../pages/development/ducks";
import { loggerSaga } from "../pages/development/common/components/logger/ducks";

export default function* rootSaga() {
	yield all([
		// exampleSaga(),
		homeSaga(),
		drawerSaga(),
		orderNowSaga(),
		switchToDesktopSaga(),
		howToUseSaga(),
		demoDialogSaga(),
		sendQuerySaga(),
		developmentSaga(),
		loggerSaga(),
	]);
}
