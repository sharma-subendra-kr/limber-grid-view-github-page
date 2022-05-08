import { createAction, createReducer, createSelector } from "@reduxjs/toolkit";
import { put, all, takeLatest } from "redux-saga/effects";

const CHANGE_POSITION_ACTION = "[logger] change position action";
const CHANGE_POSITION = "[logger] change POSITION";

const initialState = {
	position: "right",
};

export const stateSelector = (state) => state.loggerReducer;

export const getPosition = createSelector(stateSelector, (state) => {
	return state.position;
});

export const loggerReducer = createReducer(initialState, {
	[CHANGE_POSITION]: (state, { payload }) => {
		state.position = payload;
	},
});

export const changePositionAction = createAction(CHANGE_POSITION_ACTION);

function* changePositionSaga({ payload }) {
	yield put({ type: CHANGE_POSITION, payload: payload });
}

export function* loggerSaga() {
	yield all([yield takeLatest(CHANGE_POSITION, changePositionSaga)]);
}
