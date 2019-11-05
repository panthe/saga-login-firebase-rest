export interface AuthRefreshTokenParams {
  token: string;
  returnSecureToken: boolean;
}

export interface AuthRefreshTokenAction {
  type: EAuthRefreshTokenActionTypes;
  payload?: AuthState;
  errors?: string[] | null;
  params?: AuthRefreshTokenParams;
}

export interface AuthRefreshTokenApiResponse {
  idToken: string;
  refreshToken: string;
  expiresIn: number;
  error: [] | null;
}

export enum EAuthRefreshTokenActionTypes {
  GET_AUTH_REFRESH_TOKEN = 'trigger/GET_AUTH_REFRESH_TOKEN',
  GET_AUTH_REFRESH_TOKEN_REQUEST = 'event/GET_AUTH_REFRESH_TOKEN_REQUEST',
  GET_AUTH_REFRESH_TOKEN_SUCCESS = 'event/GET_AUTH_REFRESH_TOKEN_SUCCESS',
  GET_AUTH_REFRESH_TOKEN_FAILURE = 'event/GET_AUTH_REFRESH_TOKEN_FAILURE',
}
