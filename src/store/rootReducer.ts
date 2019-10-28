import { combineReducers, Reducer } from 'redux';
import { AuthReducer, AuthState} from './auth';

export interface ApplicationState {
  auth: AuthState;
}

export interface MainState {
  authReducer: ApplicationState
}

export const rootReducer: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  auth: AuthReducer
});

export default rootReducer;