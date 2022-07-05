import counterSaga from 'features/counter/counterSaga';
import {all} from 'redux-saga/effects';

function* helloSage() {
  console.log('Hello Saga');
}

export default function* rootSage() {
  console.log('Root Saga');

  yield all([helloSage(), counterSaga()])
}