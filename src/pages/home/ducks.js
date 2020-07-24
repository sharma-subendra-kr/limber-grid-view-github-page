import { createAction, createReducer, createSelector } from "@reduxjs/toolkit";
import { put, all, takeLatest } from "redux-saga/effects";

const DO_SOMETHING = "[home] do something";
const SOMETHING_DONE = "[home] something done";

const initialState = {
  loading: true,
};

export const stateSelector = (state) => state.homeReducer;

export const getLoading = createSelector(stateSelector, (state) => {
  console.log(state);
  return state.loading;
});

export const homeReducer = createReducer(initialState, {
  [SOMETHING_DONE]: (state, { payload }) => {
    state.loading = false;
  },
});

export const doSomething = createAction(DO_SOMETHING);

function* initHome({ payload }) {
  yield put({ type: SOMETHING_DONE, payload: { loading: false } });
}

export function* homeSaga() {
  yield all([yield takeLatest(DO_SOMETHING, initHome)]);
}
