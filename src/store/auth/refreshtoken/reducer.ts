import { AuthRefreshTokenAction } from './types';
import { AuthState } from '../types';

export const authRefreshTokenRequest = (
  state: AuthState,
  action: AuthRefreshTokenAction
) => ({
  ...state,
  ...action.payload
});