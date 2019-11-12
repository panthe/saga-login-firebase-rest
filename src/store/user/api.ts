import { fetch } from '../../utils/fetch';
import { UserParams } from './types';

const urlUserData: string = `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${process.env.REACT_APP_API_KEY}`;

export const apiGetUserData = async<T>(
  params:UserParams): Promise<T> => {
    console.log("Params", params);
    return fetch.post(urlUserData,params)
};