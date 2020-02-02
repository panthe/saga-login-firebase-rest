import { select, call, put, takeLatest } from 'redux-saga/effects';
import {
  AuthPasswordChangeAction,
  AuthPasswordChangeApiResponse,
  EAuthPasswordChangeTypes
} from './types';
import {
  actionPasswordChangeRequest,
  actionPasswordChangeSuccess,
  actionPasswordChangeFailure
} from './actions';
import { apiPasswordChange } from './api';

export function* sagasPasswordChangeAuth(action: AuthPasswordChangeAction) {
  const { auth } = yield select();

  yield put(actionPasswordChangeRequest(auth));

  try {
    const response: AuthPasswordChangeApiResponse = yield call(
      apiPasswordChange,
      action.params || { idToken: '', password: '', returnSecureToken: true }
    );

    if (response.error) {
      auth.errors = response.error;
      yield put(actionPasswordChangeFailure(auth));
    } else {
      auth.token = response.idToken;
      auth.refreshToken = response.refreshToken;
      auth.expiresIn = response.expiresIn;
      auth.errors = [];

      yield put(actionPasswordChangeSuccess(auth));
    }
  } catch (error) {
    auth.errors = [error];
    yield put(actionPasswordChangeFailure(auth));
  }
}

export function* watchAsyncSagasPasswordChangeAuth() {
  yield takeLatest(
    EAuthPasswordChangeTypes.GET_AUTH_PASSWORD_CHANGE,
    (action: AuthPasswordChangeAction) => sagasPasswordChangeAuth(action)
  );
}
