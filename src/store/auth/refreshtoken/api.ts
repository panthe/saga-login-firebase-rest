import { FIREBASE_API_KEY } from '../../../config/keys';
import { fetch } from '../../../utils/fetch';
import { AuthRefreshTokenParams } from './types';

const urlRefreshToken: string = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=${FIREBASE_API_KEY}`;

export const apiRefreshToken = async<T>(
  params: AuthRefreshTokenParams,
): Promise<T> => {
  console.log("Params", params);
  return fetch.post(urlRefreshToken,params);
};