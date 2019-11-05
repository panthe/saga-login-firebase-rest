import { call, put } from 'redux-saga/effects';
import { AuthAction, AuthApiResponse } from './types';
import { STATUS_VALID } from '../../../utils/constants/status';
import {
  actionSignInRequest,
  actionSignInSuccess,
  actionSignInFailure
} from './actions';
import {
  apiSignInWithMailAndPassword
} from './api';

export function* sagasAuth(
  action: AuthAction,
) {
    console.log('START 2')

    yield put(
        actionSignInRequest({
            isAuthenticated: false,
            token: null,
            errors: null,
        }),
    );

  try {
    const response: AuthApiResponse = yield call(
      apiSignInWithMailAndPassword,
        action.params || {email: '', password: ''}
    );

    console.log("Response",response);
    if (response.error) {
      return yield put(
        actionSignInFailure({
          isAuthenticated: false,
          token: null,
          errors: response.error
        })
      );
    }else{
      return yield put(
        actionSignInSuccess({
          isAuthenticated: true,
          token: response.idToken,
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
        errors: [error]
      })
    );
  }
}
