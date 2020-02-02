import { AuthState } from '../types';

export interface AuthPasswordChangeParams {
  idToken: string;
  password: string;
  returnSecureToken: boolean;
}

export interface AuthPasswordChangeAction {
  type: EAuthPasswordChangeTypes;
  payload?: AuthState;
  params?: AuthPasswordChangeParams;
  errors?: string[] | null;
}

export interface AuthPasswordChangeApiResponse {
  localId: string;
  email: string;
  passwordHash: string;
  providerUserInfo: string;
  idToken: string;
  refreshToken: string;
  expiresIn: string;
  error: [] | null;
}

export enum EAuthPasswordChangeTypes {
  GET_AUTH_PASSWORD_CHANGE = 'trigger/GET_AUTH_PASSWORD_CHANGE',
  GET_AUTH_PASSWORD_CHANGE_REQUEST = 'trigger/GET_AUTH_PASSWORD_CHANGE_REQUEST',
  GET_AUTH_PASSWORD_CHANGE_SUCCESS = 'trigger/GET_AUTH_PASSWORD_CHANGE_SUCCESS',
  GET_AUTH_PASSWORD_CHANGE_FAILURE = 'trigger/GET_AUTH_PASSWORD_CHANGE_FAILURE'
}
