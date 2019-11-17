import { AuthState } from '../types';
import { AuthPasswordChangeAction } from './types';

export const authPasswordChangeRequest = (
  state: AuthState,
  action: AuthPasswordChangeAction
) => ({
  ...state,
  ...action.payload
});

export const authPasswordChangeSuccess = (
  state: AuthState,
  action: AuthPasswordChangeAction
) => ({
  ...state,
  ...action.payload
});

export const authPasswordChangeFailure = (
  state: AuthState,
  action: AuthPasswordChangeAction
) => ({
  ...state,
  ...action.payload
});