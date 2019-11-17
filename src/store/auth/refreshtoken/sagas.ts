import { call, put, takeLatest } from 'redux-saga/effects';
import { AuthRefreshTokenAction, EAuthRefreshTokenActionTypes } from './types';
import {
  actionRefreshTokenRequest,
} from './actions';

export function* sagasRefreshTokenAuth(
  action: AuthRefreshTokenAction,
) {
  if (action.params){
    yield put(
      actionRefreshTokenRequest({
        isAuthenticated: true,
        isRefreshingToken: true,
        token: action.params.token,
        refreshToken: action.params.refreshToken,
        expiresIn: action.params.expiresIn,
        errors: null
      }),
    );
  }
}

export function* watchAsyncSagasRefreshTokenAuth() {
  yield takeLatest(
    EAuthRefreshTokenActionTypes.GET_AUTH_REFRESH_TOKEN, 
    (action: AuthRefreshTokenAction) => sagasRefreshTokenAuth(action)
    );
}