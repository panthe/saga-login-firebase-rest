import fetchConfigurationHeaders from './config';
import { EHTTPMethodsTypes } from './types';
import fetchConfigurationHeader from './config';

const fetchPATCH = async<T> (url:string): Promise<T> => {
  const response = await fetch(url, {
    method: EHTTPMethodsTypes.PATCH,
    headers: fetchConfigurationHeader
  });

  return response.json();
};

export default fetchPATCH;