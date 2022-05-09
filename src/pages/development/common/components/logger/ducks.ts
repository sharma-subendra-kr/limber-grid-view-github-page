import { createAction, createReducer, createSelector } from "@reduxjs/toolkit";
import { put, all, takeLatest } from "redux-saga/effects";

const CHANGE_POSITION_ACTION = "[logger] change position action";
const CHANGE_POSITION = "[logger] change POSITION";
const LOG_ACTION = "[logger] log action";
const LOG = "[logger] log";
const CLEAR_LOG_ACTION = "[logger] clear log action";
const CLEAR_LOG = "[logger] clear log";

const initialState = {
	position: "right",
	logs: [],
};

export const stateSelector = (state) => state.loggerReducer;

export const getPosition = createSelector(stateSelector, (state) => {
	return state.position;
});

export const getLogs = createSelector(stateSelector, (state) => {
	return state.logs;
});

export const loggerReducer = createReducer(initialState, {
	[CHANGE_POSITION]: (state, { payload }) => {
		state.position = payload;
	},
	[LOG]: (state, { payload }) => {
		const copy = [];
		for (const item of payload) {
			copy.push(JSON.stringify(item));
		}
		state.logs = [...state.logs, copy];
	},
	[CLEAR_LOG]: (state, { payload }) => {
		state.logs = [];
	},
});

export const changePositionAction = createAction(CHANGE_POSITION_ACTION);
export const logAction = createAction(LOG_ACTION);
export const clearLogAction = createAction(CLEAR_LOG_ACTION);

function* changePositionSaga({ payload }) {
	yield put({ type: CHANGE_POSITION, payload: payload });
}

function* logSaga({ payload }) {
	yield put({ type: LOG, payload: payload });
}

function* clearLogSaga({ payload }) {
	yield put({ type: CLEAR_LOG, payload: payload });
}

export function* loggerSaga() {
	yield all([yield takeLatest(CHANGE_POSITION_ACTION, changePositionSaga)]);
	yield all([yield takeLatest(LOG_ACTION, logSaga)]);
	yield all([yield takeLatest(CLEAR_LOG_ACTION, clearLogSaga)]);
}
