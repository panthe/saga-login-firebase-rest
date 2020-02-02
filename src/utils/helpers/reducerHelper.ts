import { Reducer, Action } from 'redux';

interface Handler{
  [key: string]: Reducer
}

export function createReducer<State>(
  initialState: State,
  handler: Handler
): Reducer<State> {
  return (state: State = initialState, action: Action): State => {
    console.log('TYPE', action.type)
    if (handler[action.type]) {
      return handler[action.type](state, action);
    }
    return state;
  };
}