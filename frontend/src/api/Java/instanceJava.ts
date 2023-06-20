import axios, { AxiosRequestConfig } from 'axios';

const baseURL = 'http://127.0.0.1:6868';

const instanceJava = axios.create({
  baseURL,
});

type FetchData = object;

export const clientJava = {
  async get<T>(url: string) {
    const response = await instanceJava.get<T>(url);

    console.log('get', baseURL + url);

    return response.data;
  },

  async post<T>(url: string, data: AxiosRequestConfig<unknown> | undefined) {
    console.log('post', baseURL + url);

    const response = await instanceJava.post<T>(url, data);

    return response.data;
  },

  async patch<T>(url: string, data: FetchData) {
    const response = await instanceJava.patch<T>(url, data);

    return response.data;
  },

  async delete(url: string) {
    return instanceJava.delete(url);
  },
};