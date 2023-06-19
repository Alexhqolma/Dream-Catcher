import { Dream } from '../../types/Dream';
import { routesServer } from './routes';
import { client } from './instance';

export const getDreams = () => client.get<Dream[]>(routesServer.dreams);
export const getDream = (dreamId: string) => client.get<Dream[]>(`${routesServer.dreams}/${dreamId}`);

export const createDream = (dream: Omit<Dream, 'id'>, token: string) => client.post(
  routesServer.dreams,
  dream,
  {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  }
);
