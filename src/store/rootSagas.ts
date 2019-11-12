import { all, fork } from 'redux-saga/effects';
import { watchAsyncSagasSignInAuth} from './auth/signin';
import { watchAsyncSagasSignOutAuth } from './auth/signout';
import { watchAsyncSagasRefreshTokenAuth} from './auth/refreshtoken';
import { watchAsyncSagasUserData } from './user';

export default function* rootSaga() {
  yield all([
    fork(watchAsyncSagasSignInAuth),
    fork(watchAsyncSagasSignOutAuth),
    fork(watchAsyncSagasRefreshTokenAuth),
    fork(watchAsyncSagasUserData)
  ]);
  
}
