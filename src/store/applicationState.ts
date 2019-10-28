import { combineReducers } from 'redux';
import { AuthReducer, AuthState } from './auth';

export interface State {
  auth: AuthState
}

export const rootReducer = () => combineReducers<State>({
  auth: AuthReducer
});