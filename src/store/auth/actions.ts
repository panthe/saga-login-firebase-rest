import { 
  EAuthActionTypes, 
  AuthParams,
  AuthState,
  AuthAction
} from './types';

export const actionSignInRequest = 
  (params: AuthParams): AuthAction => ({
  type: EAuthActionTypes.GET_AUTH_LOGIN_REQUEST,
  params
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