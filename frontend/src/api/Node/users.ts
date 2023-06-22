import { routesServer } from './routes';
import { client } from './instance';
import { UserCreate, UserLogin } from '../../types/User';
import { AxiosResponse } from 'axios';
import { ResponseGetUser, RequestLoginUser, ResponseLoginUser, RequestCreateUser } from './typesNodeServer';

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
