import { AuthState } from '../types';
import { Action } from 'redux';

export interface AuthRefreshTokenParams {
  token: string | null;
  refreshToken: string | null;
  expiresIn: string| null;
}

export interface AuthRefreshTokenAction {
  type: EAuthRefreshTokenActionTypes;
  payload?: AuthState;
  errors?: string[] | null;
  params?: AuthRefreshTokenParams;
}

export enum EAuthRefreshTokenActionTypes {
  GET_AUTH_REFRESH_TOKEN = 'trigger/GET_AUTH_REFRESH_TOKEN',
  GET_AUTH_REFRESH_TOKEN_REQUEST = 'event/GET_AUTH_REFRESH_TOKEN_REQUEST',
}