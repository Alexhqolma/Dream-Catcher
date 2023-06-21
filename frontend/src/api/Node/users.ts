import { routesServer } from './routes';
import { client, instanceNode } from './instance';
import { UserCreate, UserLogin } from '../../types/User';
import { AxiosResponse } from 'axios';

// export const register = (data: UserCreate) => client.post(
//   routesServer.user.register, 
//   data,
// );

// export const login = (data: UserLogin) => client.post(
//   routesServer.user.login, 
//   data,
// );

// export const getUser = (token: string) => client.get(
//   routesServer.user.getUser,
//   {
//     headers: {
//       'Authorization': `Bearer ${token}`,
//     },
//   }
// );

export type RequestLoginUser = UserLogin;
export type ResponseLoginUser = {
  success: boolean;
  token: string;
}

export type RequestCreateUser = UserCreate;
export type ResponseCreateUser = {
  success: boolean;
  token: string;
}

export const authAPI = {
  getUser(token: string) {
    return client.get<AxiosResponse<ResponseLoginUser>>(
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
    return client.post<RequestCreateUser, AxiosResponse<ResponseLoginUser>>(
      routesServer.user.register, 
      data,
    );
  },
};
