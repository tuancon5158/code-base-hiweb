import Request from './index';
import STORAGE_NAME from '@/const/storage';

const authRequest = new Request();

function login(email, password) {
  authRequest.setStoreId('');
  let token = localStorage.getItem('access-token');
  authRequest.setToken(token);
  return authRequest.post(`/auth/login`, { email, password });
}

function register(email, password, storeName) {
  authRequest.setStoreId('');
  let token = localStorage.getItem('access-token');
  authRequest.setToken(token);
  return authRequest.post(`/auth/signup`, { email, password, storeName });
}

function logout() {
  authRequest.setStoreId('');
  let token = localStorage.getItem('access-token');
  authRequest.setToken(token);
  return authRequest.delete(`/auth/logout`);
}

export const authService = {
  login,
  register,
  logout,
};
