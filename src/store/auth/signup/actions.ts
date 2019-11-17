import { AuthState } from '../types';
import {
  EAuthSignUpActionTypes,
  AuthSignUpParams,  
  AuthSignUpAction,
} from './types';


export const actionSignUp = (
    params: AuthSignUpParams,
): AuthSignUpAction => {
  console.log('PARAMS', params, EAuthSignUpActionTypes.GET_AUTH_REGISTER)
  return ({
  type: EAuthSignUpActionTypes.GET_AUTH_REGISTER,
  params,
})};

export const actionSignUpRequest =
    (payload: AuthState): AuthSignUpAction => ({
      type: EAuthSignUpActionTypes.GET_AUTH_REGISTER_REQUEST,
      payload
    });

export const actionSignUpSuccess =
  (payload: AuthState): AuthSignUpAction => ({
  type: EAuthSignUpActionTypes.GET_AUTH_REGISTER_SUCCESS,
  payload
});

export const actionSignUpFailure =
  (payload: AuthState): AuthSignUpAction => ({
  type: EAuthSignUpActionTypes.GET_AUTH_REGISTER_FAILURE,
  payload
});