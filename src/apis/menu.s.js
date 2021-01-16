import Request from './index';
import STORAGE_NAME from '@/const/storage';

const menuRequest = new Request();
menuRequest.setBaseURL('https://store1212.vnstore.xyz/api/');

function getMenus() {
  let storeId = localStorage.getItem(STORAGE_NAME.STORE_ID);
  menuRequest.setStoreId(storeId);
  let token = localStorage.getItem('access-token');
  menuRequest.setToken(token);
  return menuRequest.get('/stores/onlinestore/menus');
}

function addMenu(menu) {
  let storeId = localStorage.getItem(STORAGE_NAME.STORE_ID);
  menuRequest.setStoreId(storeId);
  let token = localStorage.getItem('access-token');
  menuRequest.setToken(token);
  return menuRequest.post('/stores/onlinestore/menus', menu);
}

function editMenu(menu) {
  let storeId = localStorage.getItem(STORAGE_NAME.STORE_ID);
  menuRequest.setStoreId(storeId);
  let token = localStorage.getItem('access-token');
  menuRequest.setToken(token);
  return menuRequest.put('/stores/onlinestore/menus/' + menu.id, menu);
}

export const menuService = {
  getMenus,
  addMenu,
  editMenu,
};
