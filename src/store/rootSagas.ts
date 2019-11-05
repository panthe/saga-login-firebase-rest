import { takeLatest } from 'redux-saga/effects';
import { EAuthActionTypes, AuthAction, sagasAuth} from './auth/signin';

export default function* rootSaga() {
  yield takeLatest(
      EAuthActionTypes.GET_AUTH_LOGIN, 
      (action: AuthAction) => sagasAuth(action)
  );
}
