import { combineReducers } from 'redux';
import { AuthReducer, AuthState } from './auth';
import { UserReducer, UserState } from './user';
import { History } from 'history';
import { connectRouter, RouterState } from 'connected-react-router';

export interface State {
  auth: AuthState,
  user: UserState,
  router: RouterState,
}

export const rootReducer = (history: History) => combineReducers<State>({
  auth: AuthReducer,
  user: UserReducer,
  router: connectRouter(history),
});