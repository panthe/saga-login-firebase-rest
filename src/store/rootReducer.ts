import { combineReducers, Reducer } from 'redux';
import { AuthReducer, AuthState} from './auth/signin';

export interface ApplicationState {
  auth: AuthState;
}

export const rootReducer: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  auth: AuthReducer
});

export default rootReducer;