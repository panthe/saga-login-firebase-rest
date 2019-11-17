import { fetch } from '../../../utils/fetch';
import { AuthSignUpParams } from './types';

const urlSignUp: string = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_API_KEY}`;

export const apiSignUpWithMailAndPassword = async<T>(
  params: AuthSignUpParams,
): Promise<T> => {
  console.log("Params", params);
  return fetch.post(urlSignUp,params);
};