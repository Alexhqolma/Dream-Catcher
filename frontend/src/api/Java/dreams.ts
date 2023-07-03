import { Dream } from '../../types/Dream';
import { javaEndPoints } from './endPoints';
import { client } from './instance';

export const getDreams = () => client.get<Dream[]>(javaEndPoints.dreams);
export const getDream = (dreamId: string) => client.get<Dream[]>(`${javaEndPoints.dreams}/${dreamId}`);

interface TRequest {
  dream: Omit<Dream, 'id'>, 
  token: string,
}

export const createDream = (
  dream:Omit<Dream, 'id'>,
  token: string,
) => client.post<TRequest, TResponse>(
  javaEndPoints.dreams,
  dream,
  {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  }
);
