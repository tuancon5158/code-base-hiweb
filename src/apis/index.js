import axios from 'axios';

export default class Request {
  api = null;
  // store1212.vnstore.xyz
  constructor() {
    // eslint-disable-next-line no-undef
    this.api = axios.create({
      // eslint-disable-next-line no-undef
      baseURL: process.env.VUE_APP_AUTH_ENDPOINT,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    this.api.interceptors.response.use(this.handleSuccess, this.handleError);
  }
  setBaseURL(baseURL) {
    this.api.defaults.baseURL = baseURL;
  }
  setToken(token) {
    this.api.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.api.defaults.headers.common['x-access-token'] = token;
  }
  setStoreId(storeId) {
    this.api.defaults.headers.common['x-store-id'] = storeId;
  }
  setURL(url) {
    this.api.defaults.baseURL = `${url}`;
  }
  handleSuccess(response) {
    return response;
  }
  handleError(error) {
    return Promise.reject(error);
  }
  get(path, options) {
    return this.api.get(path, options);
  }
  patch(path, payload) {
    return this.api.request({
      method: 'PATCH',
      url: path,
      responseType: 'json',
      data: payload,
    });
  }
  put(path, payload) {
    return this.api.request({
      method: 'PUT',
      url: path,
      responseType: 'json',
      data: payload,
    });
  }
  delete(path) {
    return this.api.request({
      method: 'DELETE',
      url: path,
      responseType: 'json',
    });
  }
  post(path, payload) {
    return this.api.request({
      method: 'POST',
      url: path,
      responseType: 'json',
      data: payload,
    });
  }
}
