import { fetch } from '../../../utils/fetch';
import { AuthSignInParams } from './types';

const urlSignIn = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_API_KEY}`;

export const apiSignInWithMailAndPassword = async <T>(
  params: AuthSignInParams
): Promise<T> => {
  console.log('Params', params);
  return fetch.post(urlSignIn, params);
};
