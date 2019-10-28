import fetchConfigurationHeader from './config';
import { EHTTPMethodsTypes } from './types';

const fetchDELETE = async<T> (url: string): Promise<T> => {
  const response = await fetch(url, {
    method: EHTTPMethodsTypes.DELETE,
    headers: fetchConfigurationHeader
  });

  return response.json();
};

export default fetchDELETE;