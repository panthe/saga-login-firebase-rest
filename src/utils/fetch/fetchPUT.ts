import fetchConfigurationHeader from './config';
import { EHTTPMethodsTypes } from './types';

const fetchPUT = async<T> (url:string): Promise<T> => {
  const response = await fetch(url, {
    method: EHTTPMethodsTypes.PUT,
    headers: fetchConfigurationHeader
  });

  return response.json();
};

export default fetchPUT;