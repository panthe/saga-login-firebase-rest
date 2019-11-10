import { AuthState } from '../types';

export interface AuthSignInParams {
  email: string;
  password: string;
  returnSecureToken: boolean
}

export interface AuthSignInAction {
  type: EAuthSignInActionTypes;
  payload?: AuthState;
  errors?: string[] | null;
  params?: AuthSignInParams;
}

export interface AuthSignInApiResponse {
  displayName: string;
  email: string;
  expiresIn: string;
  idToken: string;
  kind: string;
  localId: string;
  refreshToken: string;
  registered: boolean;  
  error: [] | null;
}

export enum EAuthSignInActionTypes {
  GET_AUTH_LOGIN = 'trigger/GET_AUTH_LOGIN',
  GET_AUTH_LOGIN_REQUEST = 'event/GET_AUTH_LOGIN_REQUEST',
  GET_AUTH_LOGIN_SUCCESS = 'event/GET_AUTH_LOGIN_SUCCESS',
  GET_AUTH_LOGIN_FAILURE = 'event/GET_AUTH_LOGIN_FAILURE',
}