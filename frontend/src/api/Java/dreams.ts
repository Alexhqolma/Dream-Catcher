import { Dream } from '../../types/Dream';
import { routesServer } from './endPoints';
import { client } from './instance';

export const getDreams = () => client.get<Dream[]>(routesServer.dreams);
export const getDream = (dreamId: string) => client.get<Dream[]>(`${routesServer.dreams}/${dreamId}`);

interface TRequest {
  dream: Omit<Dream, 'id'>, 
  token: string,
}

export const createDream = (
  dream:Omit<Dream, 'id'>,
  token: string,
) => client.post<TRequest, TResponse>(
  routesServer.dreams,
  dream,
  {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  }
);
