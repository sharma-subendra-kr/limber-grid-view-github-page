import { all } from "redux-saga/effects";

import { homeSaga } from "../pages/home/ducks";
import { drawerSaga } from "src/common/components/static/drawer/ducks";

export default function* rootSaga() {
	yield all([
		// exampleSaga(),
		homeSaga(),
		drawerSaga(),
	]);
}
