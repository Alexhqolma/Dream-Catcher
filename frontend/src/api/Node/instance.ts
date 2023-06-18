import axios, { AxiosRequestConfig } from 'axios';
import { baseURL } from './routes';

const instanceLocal = axios.create({
  baseURL,
});

export const client = {
  async get<T>(url: string, params?: AxiosRequestConfig) {
    const response = await instanceLocal.get<T>(url, params);

    console.log('get', baseURL + url);

    return response.data;
  },

  async post<T>(
    url: string,
    data: T,
    params?: AxiosRequestConfig,
  ) {
    console.log('post', baseURL + url);

    const response = await instanceLocal.post<T>(url, data, params);

    return response.data;
  },

  async patch<T>(url: string, data: T, params: AxiosRequestConfig) {
    const response = await instanceLocal.patch<T>(url, data, params);

    return response.data;
  },

  async delete(url: string) {
    return instanceLocal.delete(url);
  },
};
