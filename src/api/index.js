const Cookie = require("js-cookie");
import store from "../store";
import axios from "axios";
import STORAGE_NAME from "@/const/storage";
import { HOST } from "@/api/domain";
let service;
const api = {
  init() {
    service = axios.create({ baseURL: "process....." });
    this.initAccessTokenClient();
    service.interceptors.response.use(this.handleSuccess, this.handleError);
  },
  handleSuccess(response) {
    return response;
  },
  handleError(error) {
    return Promise.reject(error);
  },
  setAccessToken(accessToken) {
    service.defaults.headers.common[STORAGE_NAME.ACCESS_TOKEN] = accessToken;
    service.defaults.headers.common[STORAGE_NAME.AUTHORIZATION] = accessToken;
  },
  get(path, options) {
    return service.get(path, options);
  },
  patch(path, payload) {
    return service.request({
      method: "PATCH",
      url: path,
      responseType: "json",
      data: payload,
    });
  },
  put(path, payload) {
    return service.request({
      method: "PUT",
      url: path,
      responseType: "json",
      data: payload,
    });
  },
  delete(path) {
    return service.request({
      method: "DELETE",
      url: path,
      responseType: "json",
    });
  },
  post(path, payload) {
    return service.request({
      method: "POST",
      url: path,
      responseType: "json",
      data: payload,
    });
  },
};
api.init();
export default api;
