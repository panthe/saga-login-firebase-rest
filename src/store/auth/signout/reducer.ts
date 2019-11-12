import { AuthSignOutAction } from './types';
import { AuthState } from '../types';

export const authSignOutRequest = (
  state: AuthState,
  action: AuthSignOutAction
) => ({
  ...state,
  ...action.payload
});
