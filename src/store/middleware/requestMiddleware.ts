
import { Action, Dispatch, MiddlewareAPI } from 'redux';
import { isTokenExpired, apiRefreshToken } from '../../utils/helpers/token';
import { ERequestMiddlewareActionTypes } from './types';
import { actionRefreshToken} from '../auth/refreshtoken';

export type MiddlewareFunction = (api: MiddlewareAPI) => (next: Dispatch) => (action: Action) => Action;

export default function requestMiddleware():MiddlewareFunction {
  return ({ dispatch, getState }) => next => (action) => {
    if (Object.values(ERequestMiddlewareActionTypes).includes(action.type)){
      const { auth } = getState();

      if (isTokenExpired(auth.token)){
        console.log("ActionRefreshToken Called", auth);
        apiRefreshToken({
          grant_type:"refresh_token",
          refresh_token:auth.refreshToken
        }).then((response) => {
          console.log("Response on RequestMiddleware",response)

          dispatch(actionRefreshToken({
            token: response.id_token,
            refreshToken: response.refresh_token,
            expiresIn: response.expires_in
          }));
        });
        
        
        return next(action);
      }else{
        console.log("No need to Call ActionRefreshToken");
        return next(action);
      }
    }else{
      return next(action);
    }
  }  
}