import { all } from "redux-saga/effects";

import { homeSaga } from "../pages/home/ducks";
import { drawerSaga } from "src/common/components/static/drawer/ducks";
import { orderNowSaga } from "src/common/components/complex/orderNow/ducks";
import { switchToDesktopSaga } from "src/common/components/static/switchToDesktop/ducks";
import { howToUseSaga } from "src/common/components/static/howToUse/ducks";
import { demoDialogSaga } from "src/common/components/static/demoDialog/ducks";

export default function* rootSaga() {
	yield all([
		// exampleSaga(),
		homeSaga(),
		drawerSaga(),
		orderNowSaga(),
		switchToDesktopSaga(),
		howToUseSaga(),
		demoDialogSaga(),
	]);
}
