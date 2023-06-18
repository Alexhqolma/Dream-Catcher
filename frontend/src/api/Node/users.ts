import { routesServer } from './routes';
import { client } from './instance';
import { User, UserLogin } from '../../types/User';

export const register = (data: Omit<User, 'userId'>) => client.post(
  routesServer.user.register, 
  data,
);

export const login = (data: UserLogin) => client.post(
  routesServer.user.login, 
  data,
);

export const getUser = (token: string) => client.get(
  routesServer.user.getUser,
  {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  }
);
