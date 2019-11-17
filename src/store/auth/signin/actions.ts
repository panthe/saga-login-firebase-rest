import { AuthState } from '../types';
import {
  EAuthSignInActionTypes,
  AuthSignInParams,  
  AuthSignInAction,
} from './types';


export const actionSignIn = (params: AuthSignInParams): AuthSignInAction => (
  {
    type: EAuthSignInActionTypes.GET_AUTH_LOGIN,
    params,
  }
);

export const actionSignInRequest =
    (payload: AuthState): AuthSignInAction => ({
      type: EAuthSignInActionTypes.GET_AUTH_LOGIN_REQUEST,
      payload
    });

export const actionSignInSuccess =
  (payload: AuthState): AuthSignInAction => ({
  type: EAuthSignInActionTypes.GET_AUTH_LOGIN_SUCCESS,
  payload
});

export const actionSignInFailure =
  (payload: AuthState): AuthSignInAction => ({
  type: EAuthSignInActionTypes.GET_AUTH_LOGIN_FAILURE,
  payload
});