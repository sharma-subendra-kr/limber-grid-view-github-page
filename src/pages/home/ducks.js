import { createAction, createReducer, createSelector } from "@reduxjs/toolkit";
import { put, all, takeLatest } from "redux-saga/effects";

const CHANGE_LGV_VIEW_ACTION = "[home] change lgv view action";
const CHANGE_LGV_VIEW = "[home] something done";

const initialState = {
  view: "customized",
};

export const stateSelector = (state) => state.homeReducer;

export const getView = createSelector(stateSelector, (state) => {
  return state.view;
});

export const homeReducer = createReducer(initialState, {
  [CHANGE_LGV_VIEW]: (state, { payload }) => {
    state.view = payload;
  },
});

export const changeLgvViewAction = createAction(CHANGE_LGV_VIEW_ACTION);

function* changeLgvViewSaga({ payload }) {
  yield put({ type: CHANGE_LGV_VIEW, payload: payload });
}

export function* homeSaga() {
  yield all([yield takeLatest(CHANGE_LGV_VIEW_ACTION, changeLgvViewSaga)]);
}
