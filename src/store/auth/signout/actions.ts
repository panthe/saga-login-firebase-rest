import { AuthState } from '../types';
import { EAuthSignOutActionTypes, AuthSignOutAction } from './types';

export const actionSignOut = (): AuthSignOutAction => {
  return {
    type: EAuthSignOutActionTypes.GET_AUTH_LOGOUT
  };
};

export const actionSignOutRequest = (
  payload: AuthState
): AuthSignOutAction => ({
  type: EAuthSignOutActionTypes.GET_AUTH_LOGOUT_REQUEST,
  payload
});
