export enum EHTTPMethodsTypes {
  GET= 'GET',
  POST= 'POST',
  PUT= 'PUT',
  PATCH= 'PATCH',
  DELETE= 'DELETE'
}

export interface FetchParams {
  url: string;
  params?: string;
}

//TODO: Substitute the generics Types in the fetch Functions
export interface IHttpResponse<T> extends Response {
  parsedBody?: T;
}