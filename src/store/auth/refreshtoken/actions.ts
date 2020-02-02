import {
  EAuthRefreshTokenActionTypes,
  AuthRefreshTokenParams,
  AuthRefreshTokenAction
} from './types';
import { AuthState } from '../types';

export const actionRefreshToken = (
  params: AuthRefreshTokenParams
): AuthRefreshTokenAction => {
  console.log(
    'PARAMS',
    params,
    EAuthRefreshTokenActionTypes.GET_AUTH_REFRESH_TOKEN
  );
  return {
    type: EAuthRefreshTokenActionTypes.GET_AUTH_REFRESH_TOKEN,
    params
  };
};

export const actionRefreshTokenRequest = (
  payload: AuthState
): AuthRefreshTokenAction => ({
  type: EAuthRefreshTokenActionTypes.GET_AUTH_REFRESH_TOKEN_REQUEST,
  payload
});
