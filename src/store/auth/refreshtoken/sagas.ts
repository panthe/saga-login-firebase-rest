import { call, put } from 'redux-saga/effects';
import { AuthRefreshTokenAction, AuthRefreshTokenApiResponse } from './types';
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
            expiresIn: 0,
            errors: null,
        }),
    );

  try {
    const response: AuthRefreshTokenApiResponse = yield call(
      apiRefreshToken,
        action.params || {token: '', returnSecureToken: true}
    );

    console.log("Response",response);
    if (response.error) {
      return yield put(
        actionRefreshTokenFailure({
          isAuthenticated: false,
          token: null,
          refreshToken: null,
          expiresIn: 0,
          errors: response.error
        })
      );
    }else{
      return yield put(
        actionRefreshTokenSuccess({
          isAuthenticated: true,
          token: response.idToken,
          refreshToken: null,
          expiresIn: 0,
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
        expiresIn: 0,
        errors: [error]
      })
    );
  }
}