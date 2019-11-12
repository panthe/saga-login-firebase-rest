import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router'
import * as ROUTES from '../../../config/routes';
import { AuthSignOutAction, EAuthSignOutActionTypes } from './types';
import {
  actionSignOutRequest
} from './actions';

export function* sagasSignOutAuth(
  action: AuthSignOutAction,
) {
    yield put(
        actionSignOutRequest({
            isAuthenticated: false,
            token: null,
            refreshToken: null,
            expiresIn: null,
            errors: null,
        }),
    );  

    return yield put(push(ROUTES.SIGN_IN_PAGE));
}

export function* watchAsyncSagasSignOutAuth() {
  yield takeLatest(
    EAuthSignOutActionTypes.GET_AUTH_LOGOUT, 
    (action: AuthSignOutAction) => sagasSignOutAuth(action)
  );
}