import { AuthState } from '../types';

export interface AuthRefreshTokenParams {
  grant_type: string;
  refresh_token: string;  
}

export interface AuthRefreshTokenAction {
  type: EAuthRefreshTokenActionTypes;
  payload?: AuthState;
  errors?: string[] | null;
  params?: AuthRefreshTokenParams;
}

export interface AuthRefreshTokenApiResponse {
  expiresIn: number;
  token_type: string;
  refreshToken: string;
  idToken: string;
  user_id: string;
  project_id: string;
  error: [] | null;
}

export enum EAuthRefreshTokenActionTypes {
  GET_AUTH_REFRESH_TOKEN = 'trigger/GET_AUTH_REFRESH_TOKEN',
  GET_AUTH_REFRESH_TOKEN_REQUEST = 'event/GET_AUTH_REFRESH_TOKEN_REQUEST',
  GET_AUTH_REFRESH_TOKEN_SUCCESS = 'event/GET_AUTH_REFRESH_TOKEN_SUCCESS',
  GET_AUTH_REFRESH_TOKEN_FAILURE = 'event/GET_AUTH_REFRESH_TOKEN_FAILURE',
}