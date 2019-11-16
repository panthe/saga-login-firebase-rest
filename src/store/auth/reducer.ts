import { Reducer } from 'redux';
import { createReducer } from '../../utils/helpers/reducerHelper';
import { AuthState } from './types';

//SignIn
import { 
  EAuthSignInActionTypes,
  authSignInRequest,
  authSignInSuccess,
  authSignInFailure
} from './signin';

//SignOut
import {
  EAuthSignOutActionTypes,
  authSignOutRequest,
} from './signout';

//RefreshToken
import { 
  EAuthRefreshTokenActionTypes,
  authRefreshTokenRequest
} from './refreshtoken';

const initialState : AuthState = {
  isAuthenticated: false,
  token: null,
  refreshToken: null,
  expiresIn: null,
  errors: null
};

const authReducer: Reducer<AuthState> = createReducer(
  initialState,
  {
    [EAuthSignInActionTypes.GET_AUTH_LOGIN_REQUEST]: authSignInRequest,
    [EAuthSignInActionTypes.GET_AUTH_LOGIN_SUCCESS]: authSignInSuccess,
    [EAuthSignInActionTypes.GET_AUTH_LOGIN_FAILURE]: authSignInFailure,
    [EAuthRefreshTokenActionTypes.GET_AUTH_REFRESH_TOKEN_REQUEST]: authRefreshTokenRequest,
    [EAuthSignOutActionTypes.GET_AUTH_LOGOUT_REQUEST]: authSignOutRequest,
  }
);

export { authReducer as AuthReducer};