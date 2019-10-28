import fetchGET from './fetchGET';
import fetchPOST from './fetchPOST';
import fetchPUT from './fetchPUT';
import fetchPATCH from './fetchPATCH';
import fetchDELETE from './fetchDELETE';

export interface FETCH{
  get: Function;
  post: Function;  
  put: Function;
  patch: Function;
  delete: Function;
};

export const fetch: FETCH = {
  get: fetchGET,
  post: fetchPOST,
  put: fetchPUT,
  patch: fetchPATCH,
  delete: fetchDELETE
};