import { createAction, createReducer, createSelector } from "@reduxjs/toolkit";
import { put, all, takeLatest } from "redux-saga/effects";

const TOGGLE_DEMO_DIALOG_ACTION = "[demoDialog] toggle demo dialog action";
const TOGGLE_DEMO_DIALOG = "[demoDialog] toggle demo dialog";
const SET_DEMO_DIALOG_ACTION = "[demoDialog] set demo dialog action";
const SET_DEMO_DIALOG = "[demoDialog] set demo dialog";

const initialState = {
	demoDialogState: false,
};

export const stateSelector = (state) => state.demoDialogReducer;

export const getDemoDialogState = createSelector(stateSelector, (state) => {
	return state.demoDialogState;
});

export const toggleDemoDialogAction = createAction(TOGGLE_DEMO_DIALOG_ACTION);

export const setDemoDialogAction = createAction(SET_DEMO_DIALOG_ACTION);

export const demoDialogReducer = createReducer(initialState, {
	[TOGGLE_DEMO_DIALOG]: (state, { payload }) => {
		state.demoDialogState = !state.demoDialogState;
	},
	[SET_DEMO_DIALOG]: (state, { payload }) => {
		state.demoDialogState = payload;
	},
});

function* toggleDemoDialogSaga({ payload }) {
	yield put({ type: TOGGLE_DEMO_DIALOG, payload });
}

function* setDemoDialogSaga({ payload }) {
	yield put({ type: SET_DEMO_DIALOG, payload });
}

export function* demoDialogSaga() {
	yield all([
		yield takeLatest(TOGGLE_DEMO_DIALOG_ACTION, toggleDemoDialogSaga),
		yield takeLatest(SET_DEMO_DIALOG_ACTION, setDemoDialogSaga),
	]);
}
