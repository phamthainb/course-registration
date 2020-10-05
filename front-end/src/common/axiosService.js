import axios from "axios";
import { API_ENDPOINT } from "../pages/categories/constants";

// class AxiosService{
//     constructor(){
//         const instance = axios.create();
//         instance.interceptors.request.use(this.handleSuccess, this.handleError);
//         this.instance = instance;
//     }
//     handleSuccess(response){
//         return response;
//     }
//     handleError(err){
//         return Promise.reject(err);
//     }
//     get(url){
//         return this.instance.get(url);
//     }
// }

// export default new AxiosService();

// ================================================
// config axios with interceptors;

// request interceptors

const withInterceptors = axios.create();

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

// response interceptors

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
