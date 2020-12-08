const Cookie = require("js-cookie");
import store from "../store";
import axios from "axios";
import { HOST } from "@/api/domain";
let service;
const api = {
    init() {
        service = axios.create({ baseURL: HOST.PRODUCT_SERVICE });
        this.initAccessTokenClient();
        service.interceptors.response.use(this.handleSuccess, this.handleError);
    },
    handleSuccess(response) {
        return response;
    },
    handleError(error) {
        return Promise.reject(error);
    },
    initAccessTokenClient() {
        if (!Cookie) return;
        const accessToken = Cookie.get("accessToken");
        if (!accessToken) return;
        service.defaults.headers.common["access-token"] = accessToken;
        service.defaults.headers.common["Authorization"] = accessToken;
    },
    setAccessToken(accessToken) {
        service.defaults.headers.common["access-token"] = accessToken;
        service.defaults.headers.common["Authorization"] = accessToken;
    },
    get(path, options) {
        return service.get(path, options);
    },
    patch(path, payload) {
        return service.request({
            method: "PATCH",
            url: path,
            responseType: "json",
            data: payload
        });
    },
    put(path, payload) {
        return service.request({
            method: "PUT",
            url: path,
            responseType: "json",
            data: payload
        });
    },
    delete(path) {
        return service.request({
            method: "DELETE",
            url: path,
            responseType: "json"
        });
    },
    post(path, payload) {
        return service.request({
            method: "POST",
            url: path,
            responseType: "json",
            data: payload
        });
    }
};
api.init();
export default api;
