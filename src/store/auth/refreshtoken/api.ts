import { fetch } from '../../../utils/fetch';
import { AuthRefreshTokenParams } from './types';

const API_KEY: string = 'AIzaSyAxt4ZuZvemrczUykRGaY_0fFosUv4pbZ0';
const urlRefreshToken: string = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=${API_KEY}`;

export const apiRefreshToken = async<T>(
  params: AuthRefreshTokenParams,
): Promise<T> => {
  console.log("Params", params);
  return fetch.post(urlRefreshToken,params);
};