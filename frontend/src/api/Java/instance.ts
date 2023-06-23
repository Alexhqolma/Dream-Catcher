import axios, { AxiosRequestConfig } from 'axios';
import { baseURL } from './routes';

export const instanceJava = axios.create({
  baseURL,
});

export const client = {
  async get<T>(path: string, params?: AxiosRequestConfig) {
    const response = await instanceJava.get<T>(path, params);

    console.log('get JAVA API', baseURL + path);

    return response.data;
  },

  async post<TRequest, TResponse>(
    path: string,
    payload: TRequest,
    config?: AxiosRequestConfig,
  ): Promise<TResponse> {
    console.log('post JAVA API', baseURL + path);

    // const response = await instanceLocal.post<TRequest, TResponse, Params>(path, payload, config);
    const response = config
      ? await instanceJava.post<TResponse>(path, payload, config)
      : await instanceJava.post<TResponse>(path, payload);

    return response.data;
  },

  async patch<TRequest, TResponse>(
    path: string,
    payload: TRequest,
    config?: AxiosRequestConfig) {
    // const response = await instanceLocal.patch<TResponse>(path, payload, params);
    const response = config
      ? await instanceJava.patch<TResponse>(path, payload, config)
      : await instanceJava.patch<TResponse>(path, payload);

    return response.data;
  },

  async delete<TRequest, TResponse>(
    path: string,
    config?: AxiosRequestConfig,
    ) {
    return instanceJava.delete<TResponse>(path, config);
  },
};
