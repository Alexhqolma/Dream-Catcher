import { javaEndPoints } from './endPoints';
import { client } from './instance';

import { AxiosResponse } from 'axios';
import { RequestCreateUser, RequestLoginUser, ResponseGetUser, ResponseLoginUser } from '../../types/User';

export const authAPI = {
  deleteUser(token: string) {
    return client.get<AxiosResponse<ResponseGetUser>>(
      javaEndPoints.user.deleteUser,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      },
    );
  },

  getUser(token: string) {
    return client.get<AxiosResponse<ResponseGetUser>>(
      javaEndPoints.user.getUser,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      },
    );
  },

  login(data: RequestLoginUser) {
    return client.post<RequestLoginUser, AxiosResponse<ResponseLoginUser>>(
      javaEndPoints.user.login, 
      data,
    );
  },

  register(data: RequestCreateUser) {
    return client.post<
      RequestCreateUser,
      AxiosResponse<ResponseLoginUser>
    >(
      javaEndPoints.user.registration, 
      data,
    );
  },
};
