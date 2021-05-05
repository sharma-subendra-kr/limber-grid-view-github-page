import { createAction, createReducer, createSelector } from "@reduxjs/toolkit";
import { put, all, takeLatest } from "redux-saga/effects";

const TOGGLE_ORDER_NOW_DIALOG_ACTION =
	"[orderNow] toggle order now dialog action";
const TOGGLE_ORDER_NOW_DIALOG = "[orderNow] toggle order now dialog";
const SET_ORDER_NOW_DIALOG_ACTION = "[orderNow] set order now dialog action";
const SET_ORDER_NOW_DIALOG = "[orderNow] set order now dialog";

const initialState = {
	orderNowDialogState: false,
};

export const stateSelector = (state) => state.orderNowReducer;

export const getOrderNowDialogState = createSelector(stateSelector, (state) => {
	return state.orderNowDialogState;
});

export const toggleOrderNowDialogAction = createAction(
	TOGGLE_ORDER_NOW_DIALOG_ACTION
);

export const setOrderNowDialogAction = createAction(
	SET_ORDER_NOW_DIALOG_ACTION
);

export const orderNowReducer = createReducer(initialState, {
	[TOGGLE_ORDER_NOW_DIALOG]: (state, { payload }) => {
		state.orderNowDialogState = !state.orderNowDialogState;
	},
	[SET_ORDER_NOW_DIALOG]: (state, { payload }) => {
		state.orderNowDialogState = payload;
	},
});

function* toggleOrderNowDialogSaga({ payload }) {
	yield put({ type: TOGGLE_ORDER_NOW_DIALOG, payload });
}

function* setOrderNowDialogSaga({ payload }) {
	yield put({ type: SET_ORDER_NOW_DIALOG, payload });
}

export function* orderNowSaga() {
	yield all([
		yield takeLatest(TOGGLE_ORDER_NOW_DIALOG_ACTION, toggleOrderNowDialogSaga),
		yield takeLatest(SET_ORDER_NOW_DIALOG_ACTION, setOrderNowDialogSaga),
	]);
}
