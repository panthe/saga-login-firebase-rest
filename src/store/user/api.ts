import { FIREBASE_API_KEY } from '../../config/keys';
import { fetch } from '../../utils/fetch';
import { UserParams } from './types';

const urlUserData: string = `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${FIREBASE_API_KEY}`;

export const apiGetUserData = async<T>(
  params:UserParams): Promise<T> => {
    console.log("Params", params);
    return fetch.post(urlUserData,params)
};