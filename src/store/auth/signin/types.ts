export interface AuthState {
  readonly isAuthenticated: boolean;
  readonly token: string | null;
  readonly errors: string[] | null;
}

export interface AuthParams {
  email: string;
  password: string;
}

export interface AuthAction {
  type: EAuthActionTypes;
  payload?: AuthState;
  errors?: string[] | null;
  params?: AuthParams;
}

export interface AuthData {
  localId: string;
  email: string;
  displayName: string;
  idToken: string;
  registered: boolean;
  refreshToken: string;
  expiresIn: number;
}

export interface AuthApiResponse {
  localId: string;
  email: string;
  displayName: string;
  idToken: string;
  registered: boolean;  
  error: [] | null;
}

export enum EAuthActionTypes {
  GET_AUTH_LOGIN = 'trigger/GET_AUTH_LOGIN',
  GET_AUTH_LOGIN_REQUEST = 'event/GET_AUTH_LOGIN_REQUEST',
  GET_AUTH_LOGIN_SUCCESS = 'event/GET_AUTH_LOGIN_SUCCESS',
  GET_AUTH_LOGIN_FAILURE = 'event/GET_AUTH_LOGIN_FAILURE',
}