import { PayloadAction } from '@reduxjs/toolkit';
import { push } from 'connected-react-router';
import { take, fork, call, put } from 'redux-saga/effects';
import { authActions, LoginPayload } from './authSlice';

function* handleLogin(payload: LoginPayload) {
  try {
    localStorage.setItem('access_token', 'fake_token');
    yield put(authActions.loginSuccess({ id: 1, name: 'John Doe' }));

    yield put(push('/admin/dasboard'));
  } catch (error) {
    if (error instanceof Error) yield put(authActions.loginFailure(error.message));
  }
}

function* handleLogout() {
  localStorage.removeItem('access_token');
  yield put(push('/login'));
}

function* watchLoginFlow() {
  while (true) {
    const isLoggedIn = Boolean(localStorage.getItem('access_token'));
    if (!isLoggedIn) {
      const action: PayloadAction<LoginPayload> = yield take(authActions.login.type);
      yield fork(handleLogin, action.payload);
    }

    yield take(authActions.logout.type);
    yield call(handleLogout);
  }
}

export function* authSaga() {
  yield fork(watchLoginFlow);
}
