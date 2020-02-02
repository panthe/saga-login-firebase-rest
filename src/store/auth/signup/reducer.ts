import { AuthSignUpAction } from './types';
import { AuthState } from '../types';

export const authSignUpRequest = (
  state: AuthState,
  action: AuthSignUpAction
) => ({
  ...state,
  ...action.payload
});

export const authSignUpSuccess = (
  state: AuthState,
  action: AuthSignUpAction
) => ({
  ...state,
  ...action.payload
});

export const authSignUpFailure = (
  state: AuthState,
  action: AuthSignUpAction
) => ({
  ...state,
  ...action.payload
});
