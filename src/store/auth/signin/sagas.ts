import Cookies from 'js-cookie';
import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import * as ROUTES from '../../../config/routes';
import {
  AuthSignInAction,
  AuthSignInApiResponse,
  EAuthSignInActionTypes
} from './types';
import {
  actionSignInRequest,
  actionSignInSuccess,
  actionSignInFailure
} from './actions';
import { apiSignInWithMailAndPassword } from './api';

export function* sagasSignInAuth(action: AuthSignInAction) {
  yield put(
    actionSignInRequest({
      isAuthenticated: false,
      token: null,
      refreshToken: null,
      expiresIn: null,
      errors: null
    })
  );

  try {
    const response: AuthSignInApiResponse = yield call(
      apiSignInWithMailAndPassword,
      action.params || { email: '', password: '', returnSecureToken: true }
    );

    console.log('AuthSignInApiResponse', response);
    if (response.error) {
      return yield put(
        actionSignInFailure({
          isAuthenticated: false,
          token: null,
          refreshToken: null,
          expiresIn: null,
          errors: response.error
        })
      );
    } else {
      Cookies.set('token', response.idToken);
      Cookies.set('refreshToken', response.refreshToken);
      Cookies.set('expiresIn', response.expiresIn);

      yield put(
        actionSignInSuccess({
          isAuthenticated: true,
          token: response.idToken,
          refreshToken: response.refreshToken,
          expiresIn: response.expiresIn,
          errors: null
        })
      );

      return yield put(push(ROUTES.USER_PAGE));
    }
  } catch (error) {
    console.log('Error', error);
    return yield put(
      actionSignInFailure({
        isAuthenticated: false,
        token: null,
        refreshToken: null,
        expiresIn: null,
        errors: [error]
      })
    );
  }
}

export function* watchAsyncSagasSignInAuth() {
  yield takeLatest(
    EAuthSignInActionTypes.GET_AUTH_LOGIN,
    (action: AuthSignInAction) => sagasSignInAuth(action)
  );
}
