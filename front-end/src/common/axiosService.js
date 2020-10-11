import axios from "axios";
import { API_ENDPOINT } from "../pages/categories/constants";

// config axios with interceptors;

// * request interceptors

const withInterceptors = axios.create();
// withInterceptors.Header().Set()
withInterceptors.interceptors.request.use(
  function (config) {
    //do sth before request is sent
    return config;
  },
  function (err) {
    // do sth with request err
    return Promise.reject(err);
  }
);

// * response interceptors

withInterceptors.interceptors.response.use(
  function (response) {
    //do sth before request is sent
    return response;
  },
  function (err) {
    // do sth with request err
    return Promise.reject(err);
  }
);

export const apiInterceptors = async (method, url, data) => {
  withInterceptors({
    method: method | "GET",
    url: `${API_ENDPOINT}/${url}`,
    data: data,
    // headers: { "Access-Control-Allow-Origin": "*" },
  });
};

// ================================================
// config axios without interceptors;

const request = axios.create();

export const api = (method, url, data) => {
  return request({
    method: method | "GET",
    url: `${API_ENDPOINT}/${url}`,
    data,
  });
};
