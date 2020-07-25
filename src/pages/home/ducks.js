import { createAction, createReducer, createSelector } from "@reduxjs/toolkit";
import { put, all, takeLatest } from "redux-saga/effects";

const CHANGE_VIEW_ACTION = "[home] change view action";
const CHANGE_VIEW = "[home] change view";
const CHANGE_LATCH_ACTION = "[home] change latch action";
const CHANGE_LATCH = "[home] change latch";
const CHANGE_DESK_INTERACTION_MODE_ACTION =
  "[home] change desk interaction mode action";
const CHANGE_DESK_INTERACTION_MODE = "[home] change desk interaction mode";
const SET_POSITION_DATA_ACTION = "[home] set position data action";
const SET_POSITION_DATA = "[home] set position data";

const initialState = {
  view: "customized",
  latch: true,
  deskInteractionMode: "ADD",
  positionData: [],
};

export const stateSelector = (state) => state.homeReducer;

export const getView = createSelector(stateSelector, (state) => {
  return state.view;
});

export const getLatch = createSelector(stateSelector, (state) => {
  return state.latch;
});

export const getDeskInteractionMode = createSelector(stateSelector, (state) => {
  return state.deskInteractionMode;
});

export const getPositionData = createSelector(stateSelector, (state) => {
  return state.positionData;
});

export const homeReducer = createReducer(initialState, {
  [CHANGE_VIEW]: (state, { payload }) => {
    state.view = payload;
  },
  [CHANGE_LATCH]: (state, { payload }) => {
    state.latch = payload;
  },
  [CHANGE_DESK_INTERACTION_MODE]: (state, { payload }) => {
    state.deskInteractionMode = payload;
  },
  [SET_POSITION_DATA]: (state, { payload }) => {
    state.positionData = payload;
  },
});

export const changeViewAction = createAction(CHANGE_VIEW_ACTION);
export const changeLatchAction = createAction(CHANGE_LATCH_ACTION);
export const changeDeskInteractionModeAction = createAction(
  CHANGE_DESK_INTERACTION_MODE_ACTION
);
export const setPositionDataAction = createAction(SET_POSITION_DATA_ACTION);

function* changeViewSaga({ payload }) {
  yield put({ type: CHANGE_VIEW, payload: payload });
}

function* changeLatchSaga({ payload }) {
  yield put({ type: CHANGE_LATCH, payload: payload });
}

function* changeDeskInteractionModeSaga({ payload }) {
  yield put({ type: CHANGE_DESK_INTERACTION_MODE, payload: payload });
}

function* setPositionDataSaga({ payload }) {
  yield put({ type: SET_POSITION_DATA, payload: payload });
}

export function* homeSaga() {
  yield all([
    yield takeLatest(CHANGE_VIEW_ACTION, changeViewSaga),
    yield takeLatest(CHANGE_LATCH_ACTION, changeLatchSaga),
    yield takeLatest(
      CHANGE_DESK_INTERACTION_MODE_ACTION,
      changeDeskInteractionModeSaga
    ),
    yield takeLatest(SET_POSITION_DATA_ACTION, setPositionDataSaga),
  ]);
}
