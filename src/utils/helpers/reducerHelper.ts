import { Reducer } from 'redux';
import { AuthAction } from '../../store/auth/signin/types'
import { State as ApplicationState } from '../../store/applicationState';

interface ObjectLiteral {
  [key: string]: any;
}

export function createReducer<State>(
  initialState: State,
  handlers: ObjectLiteral,
): Reducer<State> {
  return (state: State = initialState, action: AuthAction): State => {
    console.log('TYPE', action.type)
    if (handlers[action.type]) {
      return handlers[action.type](state, action);
    }
    return state;
  };
}
