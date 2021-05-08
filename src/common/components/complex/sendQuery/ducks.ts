import { createAction, createReducer, createSelector } from "@reduxjs/toolkit";
import { put, all, takeLatest } from "redux-saga/effects";

const TOGGLE_SEND_QUERY_DIALOG_ACTION =
	"[sendQuery] toggle send query dialog action";
const TOGGLE_SEND_QUERY_DIALOG = "[sendQuery] toggle send query dialog";
const SET_SEND_QUERY_DIALOG_ACTION = "[sendQuery] set send query dialog action";
const SET_SEND_QUERY_DIALOG = "[sendQuery] set send query dialog";

const initialState = {
	sendQueryDialogState: false,
};

export const stateSelector = (state) => state.sendQueryReducer;

export const getSendQueryDialogState = createSelector(
	stateSelector,
	(state) => {
		return state.sendQueryDialogState;
	}
);

export const toggleSendQueryDialogAction = createAction(
	TOGGLE_SEND_QUERY_DIALOG_ACTION
);

export const setSendQueryDialogAction = createAction(
	SET_SEND_QUERY_DIALOG_ACTION
);

export const sendQueryReducer = createReducer(initialState, {
	[TOGGLE_SEND_QUERY_DIALOG]: (state, { payload }) => {
		state.sendQueryDialogState = !state.sendQueryDialogState;
	},
	[SET_SEND_QUERY_DIALOG]: (state, { payload }) => {
		state.sendQueryDialogState = payload;
	},
});

function* toggleSendQueryDialogSaga({ payload }) {
	yield put({ type: TOGGLE_SEND_QUERY_DIALOG, payload });
}

function* setSendQueryDialogSaga({ payload }) {
	yield put({ type: SET_SEND_QUERY_DIALOG, payload });
}

export function* sendQuerySaga() {
	yield all([
		yield takeLatest(
			TOGGLE_SEND_QUERY_DIALOG_ACTION,
			toggleSendQueryDialogSaga
		),
		yield takeLatest(SET_SEND_QUERY_DIALOG_ACTION, setSendQueryDialogSaga),
	]);
}
