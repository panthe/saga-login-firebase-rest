import { ERouteActionTypes, RouteAction } from './types';

export const actionGetChangeRoute = (): RouteAction => {
  return {
    type: ERouteActionTypes.GET_CHANGE_ROUTE
  };
};
