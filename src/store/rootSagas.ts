import { takeLatest } from 'redux-saga/effects';
import { EAuthSignInActionTypes, AuthSignInAction, sagasSignInAuth} from './auth/signin';
import { EAuthRefreshTokenActionTypes, AuthRefreshTokenAction, sagasRefreshTokenAuth} from './auth/refreshtoken';

export default function* rootSaga() {
  yield takeLatest(
      EAuthSignInActionTypes.GET_AUTH_LOGIN, 
      (action: AuthSignInAction) => sagasSignInAuth(action)
  );

  yield takeLatest(
    EAuthRefreshTokenActionTypes.GET_AUTH_REFRESH_TOKEN, 
    (action: AuthRefreshTokenAction) => sagasRefreshTokenAuth(action)
);
}
