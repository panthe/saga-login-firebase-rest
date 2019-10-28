import { Reducer } from 'redux';
import { createReducer } from '../../utils/helpers/reducerHelper';
import { 
  EAuthActionTypes,
  AuthState,
  AuthAction
} from './types';

const initialState : AuthState = {
  isAuthenticated: false,
  token: null,
  errors: null
};

const authSignInRequest = (
  state: AuthState,
  action: AuthAction
) => ({
  ...state,
  ...action.payload
});

const authSignInSuccess = (
  state: AuthState,
  action: AuthAction
) => ({
  ...state,
  ...action.payload
});

const authSignInFailure = (
  state: AuthState,
  action: AuthAction
) => ({
  ...state,
  ...action.payload
});

const authReducer: Reducer<AuthState> = createReducer(
  initialState,
  {
    [EAuthActionTypes.GET_AUTH_LOGIN_REQUEST]: authSignInRequest,
    [EAuthActionTypes.GET_AUTH_LOGIN_SUCCESS]: authSignInSuccess,
    [EAuthActionTypes.GET_AUTH_LOGIN_FAILURE]: authSignInFailure,
  }
);

export { authReducer as AuthReducer};