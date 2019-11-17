import { call, put, takeLatest, select } from 'redux-saga/effects';
import { push } from 'connected-react-router'
import * as ROUTES from '../../../config/routes';
import { AuthSignOutAction, EAuthSignOutActionTypes } from './types';
import {
  actionSignOutRequest
} from './actions';

export function* sagasSignOutAuth(
  action: AuthSignOutAction,
) {
  const { auth } = yield select();
  console.log("State Saga",auth);
    yield put(
        actionSignOutRequest({
            isAuthenticated: false,
            isRefreshingToken: false,
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