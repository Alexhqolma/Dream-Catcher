import { routesServer } from './routes';
import { client } from './instance';
import { UserCreate, UserGet, UserLogin } from '../../types/User';
import { AxiosResponse } from 'axios';

export type RequestGetUser = UserGet;
export type ResponseGetUser = {
  success: boolean;
  email: string;
  fullName: string;
  token: string;
  _id: string;
};
export type ResponseGetUserWithError = { success: boolean; message: string; };

export type RequestLoginUser = UserLogin;
export type ResponseLoginUser = {
  success: boolean;
  fullName: string;
  token: string;
  _id: string;
};
export type ResponseLoginUserWithError = { success: boolean; message: string; };


export type RequestCreateUser = UserCreate;
export type ResponseCreateUser = { success: boolean; token: string; };
export type ResponseCreateUserWithError = { success: boolean; message: string; };

export const authAPI = {
  getUser(token: string) {
    return client.get<AxiosResponse<ResponseGetUser>>(
      routesServer.user.getUser,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      },
    );
  },

  login(data: UserLogin) {
    return client.post<RequestLoginUser, AxiosResponse<ResponseLoginUser>>(
      routesServer.user.login, 
      data,
    );
  },

  register(data: UserCreate) {
    return client.post<
      RequestCreateUser,
      AxiosResponse<ResponseLoginUser>
    >(
      routesServer.user.register, 
      data,
    );
  },
};
