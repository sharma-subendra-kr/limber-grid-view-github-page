import { createAction, createReducer, createSelector } from "@reduxjs/toolkit";
import { put, all, takeLatest } from "redux-saga/effects";

const CHANGE_VIEW = "[home] change view";
const CHANGE_LATCH = "[home] change latch";
const CHANGE_RESIZE_METHOD = "[home] change resize method";
const CHANGE_DESK_INTERACTION_MODE = "[home] change desk interaction mode";
const SET_POSITION_DATA = "[home] set position data";
const SET_MARGIN = "[home] set margin";
const SET_MARGIN_CHANGE_VALUE = "[home] set margin change value";
const SET_SCALED_MARGIN = "[home] set scaled margin";

const initialState = {
	view: "customized",
	latch: true,
	deskInteractionMode: "CUTSPACE",
	positionData: undefined,
	margin: undefined,
	scaledMargin: undefined,
	marginChangeValue: undefined,
};

export const stateSelector = (state) => state.homeReducer;

export const getView = (state) => {
	return stateSelector(state).view;
};

export const getLatch = (state) => {
	return stateSelector(state).latch;
};

export const getDeskInteractionMode = (state) => {
	return stateSelector(state).deskInteractionMode;
};

export const getPositionData = (state) => {
	return stateSelector(state).positionData;
};

export const getMargin = (state) => {
	return stateSelector(state).margin;
};

export const getScaledMargin = (state) => {
	return stateSelector(state).scaledMargin;
};

export const getMarginChangeValue = (state) => {
	return stateSelector(state).marginChangeValue;
};

export const homeReducer = createReducer(initialState, {
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
	[SET_SCALED_MARGIN]: (state, { payload }) => {
		state.scaledMargin = payload;
	},
	[SET_MARGIN_CHANGE_VALUE]: (state, { payload }) => {
		state.marginChangeValue = payload;
	},
});

export const changeViewAction = createAction(CHANGE_VIEW);
export const changeLatchAction = createAction(CHANGE_LATCH);
export const changeDeskInteractionModeAction = createAction(
	CHANGE_DESK_INTERACTION_MODE
);
export const setPositionDataAction = createAction(SET_POSITION_DATA);
export const setMarginAction = createAction(SET_MARGIN);
export const setScaledMarginAction = createAction(SET_SCALED_MARGIN);
export const setMarginChangeValueAction = createAction(SET_MARGIN_CHANGE_VALUE);

export function* homeSaga() {}
