import { AuthState } from '../types';

export interface AuthSignUpParams {
  email: string;
  password: string;
  returnSecureToken: boolean;
}

export interface AuthSignUpAction {
  type: EAuthSignUpActionTypes;
  payload?: AuthState;
  errors?: string[] | null;
  params?: AuthSignUpParams;
}

export interface AuthSignUpApiResponse {
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

export enum EAuthSignUpActionTypes {
  GET_AUTH_REGISTER = 'trigger/GET_AUTH_REGISTER',
  GET_AUTH_REGISTER_REQUEST = 'event/GET_AUTH_REGISTER_REQUEST',
  GET_AUTH_REGISTER_SUCCESS = 'event/GET_AUTH_REGISTER_SUCCESS',
  GET_AUTH_REGISTER_FAILURE = 'event/GET_AUTH_REGISTER_FAILURE',
}