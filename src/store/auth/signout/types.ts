import { AuthState } from '../types';

export interface AuthSignOutAction {
  type: EAuthSignOutActionTypes;
  payload?: AuthState;  
}

export enum EAuthSignOutActionTypes {
  GET_AUTH_LOGOUT = 'trigger/GET_AUTH_LOGOUT',
  GET_AUTH_LOGOUT_REQUEST = 'event/GET_AUTH_LOGOUT_REQUEST'
}