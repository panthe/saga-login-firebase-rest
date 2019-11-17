import { AuthState } from '../types';
import {
  AuthPasswordChangeAction,
  AuthPasswordChangeParams,
  EAuthPasswordChangeTypes
} from './types';

export const actionPasswordChange = (
  params: AuthPasswordChangeParams
): AuthPasswordChangeAction => {
  console.log('PARAMS', params, EAuthPasswordChangeTypes.GET_AUTH_PASSWORD_CHANGE);
  return ({
    type: EAuthPasswordChangeTypes.GET_AUTH_PASSWORD_CHANGE,
    params
  })
};

export const actionPasswordChangeRequest = (
  payload: AuthState
) : AuthPasswordChangeAction => ({
    type: EAuthPasswordChangeTypes.GET_AUTH_PASSWORD_CHANGE_REQUEST,
    payload
});

export const actionPasswordChangeSuccess = (
  payload: AuthState
) : AuthPasswordChangeAction => ({
  type: EAuthPasswordChangeTypes.GET_AUTH_PASSWORD_CHANGE_SUCCESS,
  payload
});

export const actionPasswordChangeFailure = (
  payload: AuthState
) : AuthPasswordChangeAction => ({
  type: EAuthPasswordChangeTypes.GET_AUTH_PASSWORD_CHANGE_FAILURE,
  payload
});

