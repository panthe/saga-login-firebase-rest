export function createReducer<State>(
  initialState: State,
  handlers: any,
): any {
  return (state: State = initialState, action: any): State => {
    console.log('TYPE', action.type)
    if (handlers[action.type]) {
      return handlers[action.type](state, action);
    }
    return state;
  };
}
