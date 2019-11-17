
import { Action, Dispatch, MiddlewareAPI } from 'redux';
import { isTokenExpired, apiRefreshToken } from '../../utils/helpers/token';
import { ERequestMiddlewareActionTypes } from './types';
import { actionRefreshToken} from '../auth/refreshtoken';

export type MiddlewareFunction = (api: MiddlewareAPI) => (next: Dispatch) => (action: Action) => Action;

export default function requestMiddleware():MiddlewareFunction {
  return ({ dispatch, getState }) => next => (action) => {
    
    if (Object.values(ERequestMiddlewareActionTypes).includes(action.type) &&
     (typeof action.type === 'string' || action.type instanceof String) &&
     action.type.includes("trigger")){
      const { auth } = getState();
      console.log("Action on RequestMiddleware",action);
      if (isTokenExpired(auth.token)){
        console.log("ActionRefreshToken Called", auth);

        apiRefreshToken({
          grant_type:"refresh_token",
          refresh_token:auth.refreshToken
        }).then((response) => {
          console.log("Response on RequestMiddleware",response);
          
          dispatch(actionRefreshToken({
            token: response.id_token,
            refreshToken: response.refresh_token,
            expiresIn: response.expires_in
          }));
        }).catch((error) => {
          console.log("ActionRefreshToken in Error",error);
        });
        
        return next(action);
      }
        
      console.log("No need to Call ActionRefreshToken");
      return next(action);      
    }
    
    return next(action);    
  }  
}