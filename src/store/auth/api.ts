import { fetch } from '../../utils/fetch';
import { AuthParams } from './types';

const urlSignIn: string = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAxt4ZuZvemrczUykRGaY_0fFosUv4pbZ0';

export const apiSignInWithMailAndPassword = async<T>(
  params: AuthParams,
  baseUrl: string
): Promise<T> => {
  console.log('PARAMS', params, urlSignIn)
  return fetch.post(urlSignIn,params);
}