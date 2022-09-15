import { createAction, createReducer, createSelector } from "@reduxjs/toolkit";
import { put, all, takeLatest } from "redux-saga/effects";

const CHANGE_VIEW = "[home] change view";
const CHANGE_LATCH = "[home] change latch";
const CHANGE_RESIZE_METHOD = "[home] change resize method";
const CHANGE_DESK_INTERACTION_MODE = "[home] change desk interaction mode";
const SET_POSITION_DATA = "[home] set position data";

const initialState = {
	view: "customized",
	latch: true,
	deskInteractionMode: "CUTSPACE",
	positionData: undefined,
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
});

export const changeViewAction = createAction(CHANGE_VIEW);
export const changeLatchAction = createAction(CHANGE_LATCH);
export const changeDeskInteractionModeAction = createAction(
	CHANGE_DESK_INTERACTION_MODE
);
export const setPositionDataAction = createAction(SET_POSITION_DATA);

export function* homeSaga() {}
