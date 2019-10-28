import { takeLatest } from 'redux-saga/effects';
import { TypeExtraArguments } from './types';
import { EAuthActionTypes, AuthAction, sagas} from './auth';

export const rootSagasAuth = function* rootSagasAuth(
  extraArguments: TypeExtraArguments
): any {
  yield takeLatest(
    EAuthActionTypes.GET_AUTH_LOGIN_REQUEST,
    (action: AuthAction) => sagas(action, extraArguments)
  );
}