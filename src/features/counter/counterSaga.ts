import { PayloadAction } from "@reduxjs/toolkit";
import { delay, put, takeEvery, takeLatest } from "redux-saga/effects";
import { incrementSaga, incrementSagaSuccess } from "./counterSlice";

export function* handleIncreasementSaga(action: PayloadAction<number>) {
  console.log('Waiting 1s');

  yield delay(1000);

  console.log('Waiting Done, dispatch action');

  yield put(incrementSagaSuccess(action.payload));
}

export default function* counterSaga () {
  console.log('Counter Saga');
  //  yield takeEvery(incrementSaga.toString(), handleIncreasementSaga);
  yield takeLatest(incrementSaga.toString(), handleIncreasementSaga);
}