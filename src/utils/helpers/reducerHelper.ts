import { Reducer } from 'redux';
import { AuthSignInAction } from '../../store/auth/signin';
import { AuthSignOutAction } from '../../store/auth/signout'
import { AuthRefreshTokenAction } from '../../store/auth/refreshtoken';
import { UserAction } from '../../store/user';

type PermittedActions = AuthSignInAction & AuthSignOutAction & AuthRefreshTokenAction & UserAction;

interface ObjectLiteral {
  [key: string]: any;
}

export function createReducer<State>(
  initialState: State,
  handlers: ObjectLiteral,
): Reducer<State> {
  return (state: State = initialState, action: PermittedActions): State => {
    console.log('TYPE', action.type)
    if (handlers[action.type]) {
      return handlers[action.type](state, action);
    }
    return state;
  };
}
