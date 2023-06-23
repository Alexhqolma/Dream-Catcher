import axios, { AxiosRequestConfig } from 'axios';
import { baseURL } from './routes';

export const instanceNode = axios.create({
  baseURL,
});

export const client = {
  async get<T>(path: string, params?: AxiosRequestConfig) {
    const response = await instanceNode.get<T>(path, params);

    console.log('get NODE API', baseURL + path);

    return response.data;
  },

  async post<TRequest, TResponse>(
    path: string,
    payload: TRequest,
    config?: AxiosRequestConfig,
  ): Promise<TResponse> {
    console.log('post NODE API', baseURL + path);

    const response = config
      ? await instanceNode.post<TResponse>(path, payload, config)
      : await instanceNode.post<TResponse>(path, payload);

    return response.data;
  },

  async patch<TRequest, TResponse>(
    path: string,
    payload: TRequest,
    config?: AxiosRequestConfig,
  ) {
    console.log('patch NODE API', baseURL + path);

    const response = config
      ? await instanceNode.patch<TResponse>(path, payload, config)
      : await instanceNode.patch<TResponse>(path, payload);

    return response.data;
  },

  async delete<T>(path: string, params?: AxiosRequestConfig) {
    console.log('delete NODE API', baseURL + path);

    const response = await instanceNode.delete<T>(path, params);

    return response.data;
  },
};
