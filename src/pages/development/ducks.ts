import { createAction, createReducer, createSelector } from "@reduxjs/toolkit";
import { put, all, takeLatest } from "redux-saga/effects";

const CHANGE_VIEW_ACTION = "[development] change view action";
const CHANGE_VIEW = "[development] change view";
const CHANGE_LATCH_ACTION = "[development] change latch action";
const CHANGE_LATCH = "[development] change latch";
const CHANGE_RESIZE_METHOD_ACTION = "[development] change resize method action";
const CHANGE_RESIZE_METHOD = "[development] change resize method";
const CHANGE_DESK_INTERACTION_MODE_ACTION =
	"[development] change desk interaction mode action";
const CHANGE_DESK_INTERACTION_MODE =
	"[development] change desk interaction mode";
const SET_POSITION_DATA_ACTION = "[development] set position data action";
const SET_POSITION_DATA = "[development] set position data";
const SET_MARGIN_ACTION = "[home] set margin action";
const SET_MARGIN = "[home] set margin";
const SET_MARGIN_CHANGE_VALUE_ACTION = "[home] set margin change value action";
const SET_MARGIN_CHANGE_VALUE = "[home] set margin change value";

const initialState = {
	view: "customized",
	latch: true,
	resizeMethod: false,
	deskInteractionMode: "CUTSPACE",
	positionData: undefined,
	margin: undefined,
	marginChangeValue: undefined,
};

export const stateSelector = (state) => state.developmentReducer;

export const getView = createSelector(stateSelector, (state) => {
	return state.view;
});

export const getLatch = createSelector(stateSelector, (state) => {
	return state.latch;
});

export const getResizeMethod = createSelector(stateSelector, (state) => {
	return state.resizeMethod;
});

export const getDeskInteractionMode = createSelector(stateSelector, (state) => {
	return state.deskInteractionMode;
});

export const getPositionData = createSelector(stateSelector, (state) => {
	return state.positionData;
});

export const getMargin = (state) => {
	return stateSelector(state).margin;
};

export const getMarginChangeValue = (state) => {
	return stateSelector(state).marginChangeValue;
};

export const developmentReducer = createReducer(initialState, {
	[CHANGE_VIEW]: (state, { payload }) => {
		state.view = payload;
	},
	[CHANGE_LATCH]: (state, { payload }) => {
		state.latch = payload;
	},
	[CHANGE_RESIZE_METHOD]: (state, { payload }) => {
		state.resizeMethod = payload;
	},
	[CHANGE_DESK_INTERACTION_MODE]: (state, { payload }) => {
		state.deskInteractionMode = payload;
	},
	[SET_POSITION_DATA]: (state, { payload }) => {
		state.positionData = payload;
	},
	[SET_MARGIN]: (state, { payload }) => {
		state.margin = payload;
	},
	[SET_MARGIN_CHANGE_VALUE]: (state, { payload }) => {
		state.marginChangeValue = payload;
	},
});

export const changeViewAction = createAction(CHANGE_VIEW_ACTION);
export const changeLatchAction = createAction(CHANGE_LATCH_ACTION);
export const changeResizeMethodAction = createAction(
	CHANGE_RESIZE_METHOD_ACTION
);
export const changeDeskInteractionModeAction = createAction(
	CHANGE_DESK_INTERACTION_MODE_ACTION
);
export const setPositionDataAction = createAction(SET_POSITION_DATA_ACTION);
export const setMarginAction = createAction(SET_MARGIN_ACTION);
export const setMarginChangeValueAction = createAction(
	SET_MARGIN_CHANGE_VALUE_ACTION
);

function* changeViewSaga({ payload }) {
	yield put({ type: CHANGE_VIEW, payload: payload });
}

function* changeLatchSaga({ payload }) {
	yield put({ type: CHANGE_LATCH, payload: payload });
}

function* changeResizeMethodSaga({ payload }) {
	yield put({ type: CHANGE_RESIZE_METHOD, payload: payload });
}

function* changeDeskInteractionModeSaga({ payload }) {
	yield put({ type: CHANGE_DESK_INTERACTION_MODE, payload: payload });
}

function* setPositionDataSaga({ payload }) {
	yield put({ type: SET_POSITION_DATA, payload: payload });
}

function* setMarginSaga({ payload }) {
	yield put({ type: SET_MARGIN, payload });
}

function* setMarginChangeValueSaga({ payload }) {
	yield put({ type: SET_MARGIN_CHANGE_VALUE, payload });
}

export function* developmentSaga() {
	yield all([
		yield takeLatest(CHANGE_VIEW_ACTION, changeViewSaga),
		yield takeLatest(CHANGE_LATCH_ACTION, changeLatchSaga),
		yield takeLatest(CHANGE_RESIZE_METHOD_ACTION, changeResizeMethodSaga),
		yield takeLatest(
			CHANGE_DESK_INTERACTION_MODE_ACTION,
			changeDeskInteractionModeSaga
		),
		yield takeLatest(SET_POSITION_DATA_ACTION, setPositionDataSaga),
		yield takeLatest(SET_MARGIN_ACTION, setMarginSaga),
		yield takeLatest(SET_MARGIN_CHANGE_VALUE_ACTION, setMarginChangeValueSaga),
	]);
}
