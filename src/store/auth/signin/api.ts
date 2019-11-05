import { fetch } from '../../../utils/fetch';
import { AuthParams } from './types';

const API_KEY: string = 'AIzaSyAxt4ZuZvemrczUykRGaY_0fFosUv4pbZ0';
const urlSignIn: string = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;

export const apiSignInWithMailAndPassword = async<T>(
  params: AuthParams,
): Promise<T> => {
  console.log("Params", params);
  return fetch.post(urlSignIn,params);
};