import { routesServer } from './routes';
import { client } from './instance';

import { AxiosResponse } from 'axios';
import { RequestCreateUser, RequestLoginUser, ResponseDeleteUser, ResponseGetUser, ResponseLoginUser } from '../../types/User';

export const authAPI = {
  register(data: RequestCreateUser) {
    return client.post<
      RequestCreateUser,
      AxiosResponse<ResponseLoginUser>
    >(
      routesServer.user.register, 
      data,
    );
  },

  login(data: RequestLoginUser) {
    return client.post<RequestLoginUser, AxiosResponse<ResponseLoginUser>>(
      routesServer.user.login, 
      data,
    );
  },
  
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
    
  deleteUser(token: string) {
    return client.delete<AxiosResponse<ResponseDeleteUser>>(
      routesServer.user.deleteUser,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      },
    );
  },
};
