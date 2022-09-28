"use strict";

// import Vue from 'vue';
import axios from "axios";
import ls from "./secureLs";
import config from "../config";

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.baseURL = config.BASE_URL_API;
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
axios.defaults.headers.common["Accept"] = "application/json";

const token = ls.get("config") ? ls.get("config").token : null;

let configApiAuth = {
  baseURL: config.BASE_URL_API,
  Headers: {
    Authorization: `Bearer ${token}`,
  },
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

let configApiNotAuth = {
  baseURL: config.BASE_URL_API,
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

export const apiAuth = axios.create(configApiAuth);
export const apiNotAuth = axios.create(configApiNotAuth);

apiAuth.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
apiAuth.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response;
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

// Plugin.install = function(Vue) {
//   Vue.axios = _axios;
//   window.axios = _axios;
//   Object.defineProperties(Vue.prototype, {
//     axios: {
//       get() {
//         return _axios;
//       }
//     },
//     $axios: {
//       get() {
//         return _axios;
//       }
//     },
//   });
// };

// Vue.use(Plugin)

// export default Plugin;
