import { nodeEndPoints } from './endPoints';
import { client } from './instance';

import { AxiosResponse } from 'axios';
import { RequestCreateUser, RequestLoginUser, ResponseDeleteUser, ResponseGetUser, ResponseLoginUser } from '../../types/User';

export const authAPI = {
  register(data: RequestCreateUser) {
    return client.post<
      RequestCreateUser,
      AxiosResponse<ResponseLoginUser>
    >(
      nodeEndPoints.user.register, 
      data,
    );
  },

  login(data: RequestLoginUser) {
    return client.post<RequestLoginUser, AxiosResponse<ResponseLoginUser>>(
      nodeEndPoints.user.login, 
      data,
    );
  },
  
  getUser(token: string) {
    return client.get<AxiosResponse<ResponseGetUser>>(
      nodeEndPoints.user.getUser,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      },
      );
    },
    
  deleteUser(token: string) {
    return client.delete<AxiosResponse<ResponseDeleteUser>>(
      nodeEndPoints.user.deleteUser,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      },
    );
  },
};
