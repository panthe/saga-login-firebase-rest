import { combineReducers } from 'redux';
import { AuthReducer, AuthState } from './auth';
import { History } from 'history';
import { connectRouter, RouterState } from 'connected-react-router';

export interface State {
  auth: AuthState,
  router: RouterState,
}

export const rootReducer = (history: History) => combineReducers<State>({
  auth: AuthReducer,
  router: connectRouter(history),
});
