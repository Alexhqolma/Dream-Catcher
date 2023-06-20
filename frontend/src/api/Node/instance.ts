import axios, { AxiosRequestConfig } from 'axios';
import { baseURL } from './routes';

const instanceNode = axios.create({
  baseURL,
});

export const client = {
  async get<T>(path: string, params?: AxiosRequestConfig) {
    const response = await instanceNode.get<T>(path, params);

    console.log('get', baseURL + path);

    return response.data;
  },

  async post<TRequest, TResponse>(
    path: string,
    payload: TRequest,
    config?: AxiosRequestConfig,
  ): Promise<TResponse> {
    console.log('post', baseURL + path);

    // const response = await instanceLocal.post<TRequest, TResponse, Params>(path, payload, config);
    const response = config
      ? await instanceNode.post<TResponse>(path, payload, config)
      : await instanceNode.post<TResponse>(path, payload);

    return response.data;
  },

  async patch<TRequest, TResponse>(
    path: string,
    payload: TRequest,
    config?: AxiosRequestConfig) {
    // const response = await instanceLocal.patch<TResponse>(path, payload, params);
    const response = config
      ? await instanceNode.patch<TResponse>(path, payload, config)
      : await instanceNode.patch<TResponse>(path, payload);

    return response.data;
  },

  async delete(url: string) {
    return instanceNode.delete(url);
  },
};
