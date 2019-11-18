
import { Action, Dispatch, MiddlewareAPI } from 'redux';
import { isTokenExpired, apiRefreshToken } from '../../utils/helpers/token';
import { ERequestMiddlewareActionTypes } from './types';
import { actionRefreshToken} from '../auth/refreshtoken';
import { push } from 'connected-react-router'
import * as ROUTES from '../../config/routes';

export type MiddlewareFunction = (api: MiddlewareAPI) => (next: Dispatch) => (action: Action) => Action;

export default function requestMiddleware():MiddlewareFunction {
  return ({ dispatch, getState }) => next => (action) => {
    
    // NOTE: ERequestMiddlewareActionTypes are actions that calls an external API and that needs
    // a token.
    
    // This middleware check if dispatched action is of a type ERequestMiddlewareActionTypes
    // If yes check if is a trigger, because in this solution the trigger is every the request 
    // of an Action.
    // In this case check the validity of a token and if the token is expired, or near to expired,
    // the action of Refresh Token is dispached.
    // If the token was correctly refreshed the middleware dispatch the original action that will
    // get the new token directly from the renewed AuthState.
    // In case of error the sistem is redirect to LogIn Page
    if (Object.values(ERequestMiddlewareActionTypes).includes(action.type) &&
     (typeof action.type === 'string' || action.type instanceof String) &&
     action.type.includes("trigger")){
      const { auth } = getState();
      
      if (isTokenExpired(auth.token)){
        apiRefreshToken({
          grant_type:"refresh_token",
          refresh_token:auth.refreshToken
        }).then((response) => {          
          dispatchWithResolve(
            actionRefreshToken({
              token: response.id_token,
              refreshToken: response.refresh_token,
              expiresIn: response.expires_in
            }),
            dispatch
          ).then(() => {               
              return next(action); 
            }
          );
        }).catch((error) => {
          console.log("ActionRefreshToken in Error",error);    
          push(ROUTES.SIGN_IN_PAGE);      
        });
        console.log("Dispatch empty action");          
        return next({type:""});     
      }     
      return next(action);     
    }      
    return next(action);    
  }  
}

const dispatchWithResolve = (action: Action, dispatch: Dispatch) => new Promise((resolve, reject) => {  
  dispatch(action);
  resolve();
});