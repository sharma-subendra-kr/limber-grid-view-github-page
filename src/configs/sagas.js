import { all } from "redux-saga/effects";

import { homeSaga } from "../pages/home/ducks";

export default function* () {
  yield all([
    // exampleSaga(),
    homeSaga(),
  ]);
}
