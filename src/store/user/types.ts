export interface UserState {
  readonly isLoading: boolean;
  readonly isLoaded: boolean;
  readonly localId: string | null;
  readonly email: string | null;
  readonly emailVerified: boolean;
  readonly displayName: string | null;
  readonly providerUserInfo: string[] | null;
  readonly photoUrl: string | null;
  readonly passwordHash: string | null;
  readonly passwordUpdatedAt: number;
  readonly validSince: string | null;
  readonly disabled: boolean;
  readonly lastLoginAt: string | null;
  readonly createdAt: string | null;
  readonly customAuth: boolean;
  readonly errors: string[] | null;
}

export interface UserParams {
  idToken: string;
}

export interface UserAction {
  type: EUserActionTypes;
  payload?: UserState;
  errors?: string[] | null;
  params?: UserParams;
}

export interface UsersApiResponse {
  users: IUser[] | null;
  error: [] | null;
}

export interface IUser {  
  localId: string | null;
  email: string | null;
  emailVerified: boolean;
  displayName: string | null;
  providerUserInfo: string[] | null;
  photoUrl: string | null;
  passwordHash: string | null;
  passwordUpdatedAt: number;
  validSince: string | null;
  disabled: boolean;
  lastLoginAt: string | null;
  createdAt: string | null;
  customAuth: boolean;  
}

export enum EUserActionTypes {
  GET_USER_DATA = 'trigger/GET_USER_DATA',
  GET_USER_DATA_REQUEST = 'event/GET_USER_DATA_REQUEST',
  GET_USER_DATA_SUCCESS = 'event/GET_USER_DATA_SUCCESS',
  GET_USER_DATA_FAILURE = 'event/GET_USER_DATA_FAILURE',
}