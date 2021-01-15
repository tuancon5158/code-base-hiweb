import Request from './index';
import STORAGE_NAME from '@/const/storage';

const storeRequest = new Request();

function getCountries() {
  let storeId = localStorage.getItem(STORAGE_NAME.STORE_ID);
  storeRequest.setStoreId(storeId);
  let token = localStorage.getItem('access-token');
  storeRequest.setToken(token);
  return storeRequest.get(`/stores/settings/countries`);
}

function survey(params) {
  let storeId = localStorage.getItem(STORAGE_NAME.STORE_ID);
  storeRequest.setStoreId(storeId);
  let token = localStorage.getItem('access-token');
  storeRequest.setToken(token);
  return storeRequest.put(`/stores/survey`, params);
}

export const storeService = {
  getCountries,
  survey,
};
