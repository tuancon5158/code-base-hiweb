import Request from './index';
import STORAGE_NAME from '@/const/storage';

const userRequest = new Request();

function updateUser(user) {
  let token = localStorage.getItem(STORAGE_NAME.ACCESS_TOKEN);
  userRequest.setToken(token);
  return userRequest.put(`/users`, user);
}

function getUserInfo() {
  userRequest.setStoreId('');
  let token = localStorage.getItem(STORAGE_NAME.ACCESS_TOKEN);
  userRequest.setToken(token);
  return userRequest.get(`/users/info`);
}

function getStores() {
  userRequest.setStoreId('');
  let token = localStorage.getItem(STORAGE_NAME.ACCESS_TOKEN);
  userRequest.setToken(token);
  return userRequest.get(`/users/stores`);
}

function addStore(store) {
  let token = localStorage.getItem(STORAGE_NAME.ACCESS_TOKEN);
  userRequest.setToken(token);
  return userRequest.post(`/users/create-store`, store);
}

export const userService = {
  updateUser,
  getUserInfo,
  getStores,
  addStore,
};
