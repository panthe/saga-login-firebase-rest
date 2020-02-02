import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import * as ROUTES from '../../../config/routes';
import {
  AuthSignUpAction,
  AuthSignUpApiResponse,
  EAuthSignUpActionTypes
} from './types';
import {
  actionSignUpRequest,
  actionSignUpSuccess,
  actionSignUpFailure
} from './actions';
import { apiSignUpWithMailAndPassword } from './api';
import Cookies from 'js-cookie';

export function* sagasSignUpAuth(action: AuthSignUpAction) {
  yield put(
    actionSignUpRequest({
      isAuthenticated: false,
      token: null,
      refreshToken: null,
      expiresIn: null,
      errors: null
    })
  );

  try {
    const response: AuthSignUpApiResponse = yield call(
      apiSignUpWithMailAndPassword,
      action.params || { email: '', password: '', returnSecureToken: true }
    );

    console.log('AuthSignUpApiResponse', response);
    if (response.error) {
      return yield put(
        actionSignUpFailure({
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
        actionSignUpSuccess({
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
      actionSignUpFailure({
        isAuthenticated: false,
        token: null,
        refreshToken: null,
        expiresIn: null,
        errors: [error]
      })
    );
  }
}

export function* watchAsyncSagasSignUpAuth() {
  yield takeLatest(
    EAuthSignUpActionTypes.GET_AUTH_REGISTER,
    (action: AuthSignUpAction) => sagasSignUpAuth(action)
  );
}
