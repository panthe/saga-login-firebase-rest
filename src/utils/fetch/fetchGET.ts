import fetchConfigurationHeader from './config';
import { EHTTPMethodsTypes } from './types';

const fetchGET = async<T>(url: string): Promise<T> => {
  const response = await fetch(url, {
    method: EHTTPMethodsTypes.GET,
    headers: fetchConfigurationHeader
  });

  return response.json();
};

export default fetchGET;