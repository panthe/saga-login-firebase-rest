import { call, put, takeLatest } from 'redux-saga/effects';
import { AuthRefreshTokenAction, AuthRefreshTokenApiResponse,EAuthRefreshTokenActionTypes } from './types';
import {
  actionRefreshTokenRequest,
  actionRefreshTokenSuccess,
  actionRefreshTokenFailure
} from './actions';
import {
  apiRefreshToken
} from './api';

export function* sagasRefreshTokenAuth(
  action: AuthRefreshTokenAction,
) {
    yield put(
      actionRefreshTokenRequest({
            isAuthenticated: false,
            token: null,
            refreshToken: null,
            expiresIn: null,
            errors: null,
        }),
    );

  try {
    const response: AuthRefreshTokenApiResponse = yield call(
      apiRefreshToken,
        action.params || {grant_type: 'refresh_token', refresh_token: ''}
    );

    console.log("AuthRefreshTokenApiResponse",response);
    if (response.error) {
      return yield put(
        actionRefreshTokenFailure({
          isAuthenticated: false,
          token: null,
          refreshToken: null,
          expiresIn: null,
          errors: response.error
        })
      );
    }else{
      return yield put(
        actionRefreshTokenSuccess({
          isAuthenticated: true,
          token: response.id_token,
          refreshToken: response.refresh_token,
          expiresIn: response.expires_in,
          errors: null
        })
      );
    }

  } catch (error) {
    console.log("Error",error)
    return yield put(
      actionRefreshTokenFailure({
        isAuthenticated: false,
        token: null,
        refreshToken: null,
        expiresIn: null,
        errors: [error]
      })
    );
  }
}

export function* watchAsyncSagasRefreshTokenAuth() {
  yield takeLatest(
    EAuthRefreshTokenActionTypes.GET_AUTH_REFRESH_TOKEN, 
    (action: AuthRefreshTokenAction) => sagasRefreshTokenAuth(action)
    );
}