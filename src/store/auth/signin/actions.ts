import {
  EAuthActionTypes,
  AuthParams,
  AuthState,
  AuthAction,
} from './types';


export const actionSignIn = (
    params: AuthParams,
): AuthAction => {
  console.log('PARAMS', params, EAuthActionTypes.GET_AUTH_LOGIN)
  return ({
  type: EAuthActionTypes.GET_AUTH_LOGIN,
  params,
})};

export const actionSignInRequest =
    (payload: AuthState): AuthAction => ({
      type: EAuthActionTypes.GET_AUTH_LOGIN_REQUEST,
      payload
    });

export const actionSignInSuccess =
  (payload: AuthState): AuthAction => ({
  type: EAuthActionTypes.GET_AUTH_LOGIN_SUCCESS,
  payload
});

export const actionSignInFailure =
  (payload: AuthState): AuthAction => ({
  type: EAuthActionTypes.GET_AUTH_LOGIN_FAILURE,
  payload
});