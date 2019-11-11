import { 
  UserState,
  EUserActionTypes,
  UserAction,
  UserParams
} from './types';

export const actionGetUserData = (
  params: UserParams
): UserAction => {
  console.log('PARAMS', params, EUserActionTypes.GET_USER_LOGIN);
  return ({
    type: EUserActionTypes.GET_USER_LOGIN,
    params
  })
};

export const actionGetUserDataRequest = 
  (payload: UserState): UserAction => ({
    type: EUserActionTypes.GET_USER_LOGIN_REQUEST,
    payload
});

export const actionGetUserDataSuccess =
  (payload: UserState): UserAction => ({
    type: EUserActionTypes.GET_USER_LOGIN_SUCCESS, 
    payload
});

export const actionGetUserDataFailure =
  (payload: UserState): UserAction => ({
    type: EUserActionTypes.GET_USER_LOGIN_FAILURE,
    payload
});