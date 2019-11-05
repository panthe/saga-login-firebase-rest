import { FIREBASE_API_KEY } from '../../../config/keys';
import { fetch } from '../../../utils/fetch';
import { AuthSignInParams } from './types';

const urlSignIn: string = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_API_KEY}`;

export const apiSignInWithMailAndPassword = async<T>(
  params: AuthSignInParams,
): Promise<T> => {
  console.log("Params", params);
  return fetch.post(urlSignIn,params);
};