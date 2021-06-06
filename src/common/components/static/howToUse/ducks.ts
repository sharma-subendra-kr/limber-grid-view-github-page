import { createAction, createReducer, createSelector } from "@reduxjs/toolkit";
import { put, all, takeLatest } from "redux-saga/effects";

const TOGGLE_HOW_TO_USE_DIALOG_ACTION =
	"[howToUse] toggle how to use dialog action";
const TOGGLE_HOW_TO_USE_DIALOG = "[howToUse] toggle how to use dialog";
const SET_HOW_TO_USE_DIALOG_ACTION = "[howToUse] set how to use dialog action";
const SET_HOW_TO_USE_DIALOG = "[howToUse] set how to use dialog";

const initialState = {
	howToUseDialogState: false,
};

export const stateSelector = (state) => state.howToUseReducer;

export const getHowToUseDialogState = createSelector(stateSelector, (state) => {
	return state.howToUseDialogState;
});

export const toggleHowToUseDialogAction = createAction(
	TOGGLE_HOW_TO_USE_DIALOG_ACTION
);

export const setHowToUseDialogAction = createAction(
	SET_HOW_TO_USE_DIALOG_ACTION
);

export const howToUseReducer = createReducer(initialState, {
	[TOGGLE_HOW_TO_USE_DIALOG]: (state, { payload }) => {
		state.howToUseDialogState = !state.howToUseDialogState;
	},
	[SET_HOW_TO_USE_DIALOG]: (state, { payload }) => {
		state.howToUseDialogState = payload;
	},
});

function* toggleHowToUseDialogSaga({ payload }) {
	yield put({ type: TOGGLE_HOW_TO_USE_DIALOG, payload });
}

function* setHowToUseDialogSaga({ payload }) {
	yield put({ type: SET_HOW_TO_USE_DIALOG, payload });
}

export function* howToUseSaga() {
	yield all([
		yield takeLatest(TOGGLE_HOW_TO_USE_DIALOG_ACTION, toggleHowToUseDialogSaga),
		yield takeLatest(SET_HOW_TO_USE_DIALOG_ACTION, setHowToUseDialogSaga),
	]);
}
