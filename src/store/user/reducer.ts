import { Reducer } from 'redux';
import { createReducer } from '../../utils/helpers/reducerHelper';
import { UserState, UserAction, EUserActionTypes } from './types';

export const userRequest = (state: UserState, action: UserAction) => ({
  ...state,
  ...action.payload
});

export const userSuccess = (state: UserState, action: UserAction) => ({
  ...state,
  ...action.payload
});

export const userFailure = (state: UserState, action: UserAction) => ({
  ...state,
  ...action.payload
});

const initialState: UserState = {
  isLoading: false,
  isLoaded: false,
  localId: null,
  email: null,
  emailVerified: false,
  displayName: null,
  providerUserInfo: null,
  photoUrl: null,
  passwordHash: null,
  passwordUpdatedAt: 0,
  validSince: null,
  disabled: false,
  lastLoginAt: null,
  createdAt: null,
  customAuth: false,
  errors: null
};

const userReducer: Reducer<UserState> = createReducer(initialState, {
  [EUserActionTypes.GET_USER_DATA_REQUEST]: userRequest,
  [EUserActionTypes.GET_USER_DATA_SUCCESS]: userSuccess,
  [EUserActionTypes.GET_USER_DATA_FAILURE]: userFailure
});

export { userReducer as UserReducer };
