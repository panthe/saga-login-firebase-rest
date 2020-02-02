import { call, put, takeLatest, select } from 'redux-saga/effects';
import { UserAction, UsersApiResponse, IUser, EUserActionTypes } from './types';
import {
  actionGetUserDataRequest,
  actionGetUserDataSuccess,
  actionGetUserDataFailure
} from './actions';
import { apiGetUserData } from './api';

export function* sagasUser(action: UserAction) {
  yield put(
    actionGetUserDataRequest({
      isLoading: true,
      isLoaded: false,
      localId: null,
      email: null,
      emailVerified: false,
      displayName: null,
      providerUserInfo: null,
      photoUrl: null,
      passwordHash: null,
      passwordUpdatedAt: 0,
      validSince: null,
      disabled: false,
      lastLoginAt: null,
      createdAt: null,
      customAuth: false,
      errors: null
    })
  );

  try {
    const { auth } = yield select();
    const response: UsersApiResponse = yield call(apiGetUserData, {
      idToken: auth.token
    });

    console.log('UsersApiResponse', response);
    if (response.error) {
      yield put(
        actionGetUserDataFailure({
          isLoading: false,
          isLoaded: false,
          localId: null,
          email: null,
          emailVerified: false,
          displayName: null,
          providerUserInfo: null,
          photoUrl: null,
          passwordHash: null,
          passwordUpdatedAt: 0,
          validSince: null,
          disabled: false,
          lastLoginAt: null,
          createdAt: null,
          customAuth: false,
          errors: response.error
        })
      );
    } else {
      if (response.users) {
        const user: IUser = response.users[0];
        yield put(
          actionGetUserDataSuccess({
            isLoading: false,
            isLoaded: true,
            localId: user.localId,
            email: user.email,
            emailVerified: user.emailVerified,
            displayName: user.displayName,
            providerUserInfo: user.providerUserInfo,
            photoUrl: user.photoUrl,
            passwordHash: user.passwordHash,
            passwordUpdatedAt: user.passwordUpdatedAt,
            validSince: user.validSince,
            disabled: user.disabled,
            lastLoginAt: user.lastLoginAt,
            createdAt: user.createdAt,
            customAuth: user.customAuth,
            errors: null
          })
        );
      }
    }
  } catch (error) {
    yield put(
      actionGetUserDataFailure({
        isLoading: false,
        isLoaded: false,
        localId: null,
        email: null,
        emailVerified: false,
        displayName: null,
        providerUserInfo: null,
        photoUrl: null,
        passwordHash: null,
        passwordUpdatedAt: 0,
        validSince: null,
        disabled: false,
        lastLoginAt: null,
        createdAt: null,
        customAuth: false,
        errors: [error]
      })
    );
  }
}

export function* watchAsyncSagasUserData() {
  yield takeLatest(EUserActionTypes.GET_USER_DATA, (action: UserAction) =>
    sagasUser(action)
  );
}
