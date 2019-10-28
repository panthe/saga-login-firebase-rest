import { call, put } from 'redux-saga/effects';
import { TypeExtraArguments } from '../types';
import { AuthAction, AuthApiResponse } from './types';
import { STATUS_VALID } from '../../utils/constants/status';
import {
  actionSignInRequest,
  actionSignInSuccess,
  actionSignInFailure
} from './actions';
import {
  apiSignInWithMailAndPassword
} from './api';

const fakeData: AuthApiResponse = {
  status: STATUS_VALID,
  payload: {
    localId: 'LocalId123',
    email: 'fake@email.com',
    displayName: 'Fake Display Name',
    idToken: 'IdToken123',
    registered: true,
    refreshToken: 'RefreshToken123',
    expiresIn: 3600
  },
  errors: []
};


export function* sagas(
  action: AuthAction,
  extraArguments: TypeExtraArguments
) {
  yield put(
    actionSignInRequest({
      email: '',
      password: ''
    })
  );

  try {
    const { payload, status, errors }: AuthApiResponse = yield call(
      apiSignInWithMailAndPassword,
      action.params || {},
      extraArguments.BASE_URL
    );

    return yield put(
      actionSignInSuccess({
        isAuthenticated: true,
        token: fakeData.payload.idToken,
        errors: []
      })
    );

  } catch (error) {
    return yield put(
      actionSignInFailure({
        isAuthenticated: false,
        token: null,
        errors: [error]
      })
    );
  }
}