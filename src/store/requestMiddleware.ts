
import { Action, Store, Dispatch, MiddlewareAPI, Middleware } from 'redux';
import { convertFromEpoch } from '../utils/helpers/epoch';
import { verifyToken } from '../utils/helpers/token';
import { EUserActionTypes } from './user';
import { actionRefreshToken} from './auth/refreshtoken';

export type MiddlewareFunction = (api: any) => (next: Dispatch) => (action: Action) => any;

export default function requestMiddleware():MiddlewareFunction {
  return ({ dispatch, getState }) => next => (action) => {
    if (Object.values(EUserActionTypes).includes(action.type)){
      console.log("RequestMiddleware");
      console.log("Dispatch",dispatch);
      console.log("GetState",getState());
      console.log("Action",action);

      const { auth } = getState();

      if (!verifyToken(auth.token)){
        console.log("ActionRefreshToken Called");
        actionRefreshToken({
          grant_type:"refresh_token",
          refresh_token:auth.refresh_token
        });
      }else{
        console.log("No need to Call ActionRefreshToken");
        return next(action);
      }
    }else{
      return next(action);
    }
  }
  
}