import { call, put } from 'redux-saga/effects';
import { AuthSignInAction, AuthSignInApiResponse } from './types';
import {
  actionSignInRequest,
  actionSignInSuccess,
  actionSignInFailure
} from './actions';
import {
  apiSignInWithMailAndPassword
} from './api';

export function* sagasSignInAuth(
  action: AuthSignInAction,
) {
    yield put(
        actionSignInRequest({
            isAuthenticated: false,
            token: null,
            refreshToken: null,
            expiresIn: 0,
            errors: null,
        }),
    );

  try {
    const response: AuthSignInApiResponse = yield call(
      apiSignInWithMailAndPassword,
        action.params || {email: '', password: ''}
    );

    console.log("Response",response);
    if (response.error) {
      return yield put(
        actionSignInFailure({
          isAuthenticated: false,
          token: null,
          refreshToken: null,
          expiresIn: 0,
          errors: response.error
        })
      );
    }else{
      return yield put(
        actionSignInSuccess({
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
      actionSignInFailure({
        isAuthenticated: false,
        token: null,
        refreshToken: null,
        expiresIn: 0,
        errors: [error]
      })
    );
  }
}