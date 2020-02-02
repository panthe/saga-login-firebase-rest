import { AuthSignInAction } from './types';
import { AuthState } from '../types';

export const authSignInRequest = (
  state: AuthState,
  action: AuthSignInAction
) => ({
  ...state,
  ...action.payload
});

export const authSignInSuccess = (
  state: AuthState,
  action: AuthSignInAction
) => ({
  ...state,
  ...action.payload
});

export const authSignInFailure = (
  state: AuthState,
  action: AuthSignInAction
) => ({
  ...state,
  ...action.payload
});
