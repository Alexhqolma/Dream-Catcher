import axios from 'axios';

const baseURL = 'http://127.0.0.1:6868';

const instance = axios.create({
  baseURL,
});

type FetchData = object;

export const clientLocal = {
  async get<T>(url: string) {
    const response = await instance.get<T>(url);

    console.log('get', baseURL + url, response.data);

    return response.data;
  },

  async post<T>(url: string, data: FetchData) {
    console.log('post', baseURL + url);

    const response = await instance.post<T>(url, data);

    return response.data;
  },

  async patch<T>(url: string, data: FetchData) {
    const response = await instance.patch<T>(url, data);

    return response.data;
  },

  async delete(url: string) {
    return instance.delete(url);
  },
};