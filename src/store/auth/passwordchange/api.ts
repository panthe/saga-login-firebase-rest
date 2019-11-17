import { fetch } from '../../../utils/fetch';
import { AuthPasswordChangeParams } from './types';

const urlPasswordChange: string = `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${process.env.REACT_APP_API_KEY}`;

export const apiPasswordChange = async<T>(
  params: AuthPasswordChangeParams,
): Promise<T> => {
  console.log("Params", params);
  return fetch.post(urlPasswordChange,params);
};