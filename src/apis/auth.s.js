import Request from './index';

const authRequest = new Request();
authRequest.setURL('https://tuancontest');
localStorage.getItem('Domain');
function login(email, password) {
  return authRequest.post(`/admin/login`, { email, password });
}

export const authService = {
  login,
};
