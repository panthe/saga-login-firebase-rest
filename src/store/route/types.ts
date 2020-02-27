export interface RouteAction {
  type: ERouteActionTypes;
  errors?: string[] | null;
}

export enum ERouteActionTypes {
  GET_CHANGE_ROUTE = 'trigger/GET_CHANGE_ROUTE'
}
