import fetchConfigurationHeaders from './config';
import { EHTTPMethodsTypes } from './types';
import fetchConfigurationHeader from './config';

const fetchPUT = async<T> (url:string): Promise<T> => {
  const response = await fetch(url, {
    method: EHTTPMethodsTypes.PUT,
    headers: fetchConfigurationHeader
  });

  return response.json();
};

export default fetchPUT;