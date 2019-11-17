import { all, fork } from 'redux-saga/effects';
import { watchAsyncSagasSignInAuth } from './auth/signin';
import { watchAsyncSagasSignUpAuth } from './auth/signup';
import { watchAsyncSagasSignOutAuth } from './auth/signout';
import { watchAsyncSagasRefreshTokenAuth } from './auth/refreshtoken';
import { watchAsyncSagasPasswordChangeAuth } from './auth/passwordchange';
import { watchAsyncSagasUserData } from './user';

export default function* rootSaga() {
  yield all([    
    fork(watchAsyncSagasSignInAuth),
    fork(watchAsyncSagasSignUpAuth),
    fork(watchAsyncSagasSignOutAuth),
    fork(watchAsyncSagasRefreshTokenAuth),
    fork(watchAsyncSagasPasswordChangeAuth),
    fork(watchAsyncSagasUserData)
  ]);
  
}
