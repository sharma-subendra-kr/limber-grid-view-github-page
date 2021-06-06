import { createAction, createReducer, createSelector } from "@reduxjs/toolkit";
import { put, all, takeLatest } from "redux-saga/effects";

const TOGGLE_DRAWER_ACTION = "[drawer] toggle drawer action";
const TOGGLE_DRAWER = "[drawer] toggle drawer";

const initialState = {
	drawerState: false,
};

export const stateSelector = (state) => state.drawerReducer;

export const getDrawerState = createSelector(stateSelector, (state) => {
	return state.drawerState;
});

export const toggleDrawerStateAction = createAction(TOGGLE_DRAWER_ACTION);

export const drawerReducer = createReducer(initialState, {
	[TOGGLE_DRAWER]: (state, { payload }) => {
		state.drawerState = !state.drawerState;
	},
});

function* toggleDrawerSaga({ payload }) {
	yield put({ type: TOGGLE_DRAWER, payload });
}

export function* drawerSaga() {
	yield all([yield takeLatest(TOGGLE_DRAWER_ACTION, toggleDrawerSaga)]);
}
