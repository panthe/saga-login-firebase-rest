import { FIREBASE_API_KEY } from '../../../config/keys';
import { fetch } from '../../../utils/fetch';
import { AuthRefreshTokenParams } from './types';

const urlRefreshToken: string = `https://securetoken.googleapis.com/v1/token?key=${FIREBASE_API_KEY}`;

export const apiRefreshToken = async<T>(
  params: AuthRefreshTokenParams,
): Promise<T> => {
  console.log("Params", params);
  return fetch.post(urlRefreshToken,params);
};