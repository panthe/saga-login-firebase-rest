import fetchConfigurationHeader from './config';
import { EHTTPMethodsTypes } from './types';

const fetchPOST = async<T>(url: string, params: {}): Promise<T> => {
  const response = await fetch(url, {
    method: EHTTPMethodsTypes.POST,
    headers: {
      ...fetchConfigurationHeader
    },
    body: JSON.stringify(params)
  });

  return response.json();
};

export default fetchPOST;