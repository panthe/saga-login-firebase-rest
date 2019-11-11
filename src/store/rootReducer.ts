import { combineReducers, Reducer } from 'redux';
import { AuthReducer, AuthState} from './auth';
import { UserReducer, UserState } from './user';

export interface ApplicationState {
  auth: AuthState;
  user: UserState;
}

export const rootReducer: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  auth: AuthReducer,
  user: UserReducer
});

export default rootReducer;