import { Reducer } from 'redux';
import { AuthSignInAction } from '../../store/auth/signin'
import { AuthRefreshTokenAction } from '../../store/auth/refreshtoken'

type PermittedActions = AuthSignInAction & AuthRefreshTokenAction;

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
