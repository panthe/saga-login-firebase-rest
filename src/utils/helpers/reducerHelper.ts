import { Reducer } from 'redux';
import { AuthSignInAction } from '../../store/auth/signin';
import { AuthSignOutAction } from '../../store/auth/signout'
import { AuthRefreshTokenAction } from '../../store/auth/refreshtoken';
import { UserAction } from '../../store/user';

type PermittedActions = AuthSignInAction & AuthSignOutAction & AuthRefreshTokenAction & UserAction;

interface Handler{
  [key: string]: Reducer
}

export function createReducer<State>(
  initialState: State,
  handler: Handler
): Reducer<State> {
  return (state: State = initialState, action: PermittedActions): State => {
    console.log('TYPE', action.type)
    if (handler[action.type]) {
      return handler[action.type](state, action);
    }
    return state;
  };
}