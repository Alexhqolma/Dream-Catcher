import { Dream, RequestCreateDream, RequestDeleteDream, RequestGetDream, RequestPatchDream, ResponseCreateDream, ResponseDeleteDream, ResponseGetDream, ResponsePatchDream } from '../../types/Dream';
import { routesServer } from './routes';
import { client } from './instance';
import { AxiosResponse } from 'axios';

export const getDreams = () => client.get<Dream[]>(routesServer.dreams);
export const getDream = (dreamId: string) => client.get<Dream[]>(`${routesServer.dreams}/${dreamId}`);


export const dreamAPI = {
  create({ dream, token }: RequestCreateDream) {
    return client.post<Dream, AxiosResponse<ResponseCreateDream>>(
      routesServer.dreams, 
      dream,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      }
    );
  },

  get({ dreamId }: RequestGetDream) {
    return client.get<AxiosResponse<ResponseGetDream>>(
      `${routesServer.dreams}/${dreamId}`,
    );
  },

  update({ dream, token }: RequestPatchDream) {
    return client.patch<Dream, AxiosResponse<ResponsePatchDream>>(
      `${routesServer.dreams}/${dream.id}`, 
      dream,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      }
    );
  },
     
  delete({ dreamId, token }: RequestDeleteDream) {
    return client.delete<AxiosResponse<ResponseDeleteDream>>(
      `${routesServer.dreams}/${dreamId}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      },
    );
  },
};
