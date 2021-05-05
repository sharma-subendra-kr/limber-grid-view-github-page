import { createAction, createReducer, createSelector } from "@reduxjs/toolkit";
import { put, all, takeLatest } from "redux-saga/effects";

const TOGGLE_SWITCH_TO_DESKTOP_DIALOG_ACTION =
	"[switchToDesktop] toggle switch to desktop dialog action";
const TOGGLE_SWITCH_TO_DESKTOP_DIALOG =
	"[switchToDesktop] toggle switch to desktop dialog";
const SET_SWITCH_TO_DESKTOP_DIALOG_ACTION =
	"[switchToDesktop] set switch to desktop dialog action";
const SET_SWITCH_TO_DESKTOP_DIALOG =
	"[switchToDesktop] set switch to desktop dialog";

const initialState = {
	switchToDesktopDialogState: false,
};

export const stateSelector = (state) => state.switchToDesktopReducer;

export const getswitchToDesktopDialogState = createSelector(
	stateSelector,
	(state) => {
		return state.switchToDesktopDialogState;
	}
);

export const toggleswitchToDesktopDialogAction = createAction(
	TOGGLE_SWITCH_TO_DESKTOP_DIALOG_ACTION
);

export const setSwitchToDesktopDialogAction = createAction(
	SET_SWITCH_TO_DESKTOP_DIALOG_ACTION
);

export const switchToDesktopReducer = createReducer(initialState, {
	[TOGGLE_SWITCH_TO_DESKTOP_DIALOG]: (state, { payload }) => {
		state.switchToDesktopDialogState = !state.switchToDesktopDialogState;
	},
	[SET_SWITCH_TO_DESKTOP_DIALOG]: (state, { payload }) => {
		state.switchToDesktopDialogState = payload;
	},
});

function* toggleSwitchToDesktopDialogSaga({ payload }) {
	yield put({ type: TOGGLE_SWITCH_TO_DESKTOP_DIALOG, payload });
}

function* setSwitchToDesktopDialogSaga({ payload }) {
	yield put({ type: SET_SWITCH_TO_DESKTOP_DIALOG, payload });
}

export function* switchToDesktopSaga() {
	yield all([
		yield takeLatest(
			TOGGLE_SWITCH_TO_DESKTOP_DIALOG_ACTION,
			toggleSwitchToDesktopDialogSaga
		),
		yield takeLatest(
			SET_SWITCH_TO_DESKTOP_DIALOG_ACTION,
			setSwitchToDesktopDialogSaga
		),
	]);
}
