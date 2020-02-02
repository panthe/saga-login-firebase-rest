import { UserState, EUserActionTypes, UserAction } from './types';

export const actionGetUserData = (): UserAction => {
  return {
    type: EUserActionTypes.GET_USER_DATA
  };
};

export const actionGetUserDataRequest = (payload: UserState): UserAction => ({
  type: EUserActionTypes.GET_USER_DATA_REQUEST,
  payload
});

export const actionGetUserDataSuccess = (payload: UserState): UserAction => ({
  type: EUserActionTypes.GET_USER_DATA_SUCCESS,
  payload
});

export const actionGetUserDataFailure = (payload: UserState): UserAction => ({
  type: EUserActionTypes.GET_USER_DATA_FAILURE,
  payload
});
