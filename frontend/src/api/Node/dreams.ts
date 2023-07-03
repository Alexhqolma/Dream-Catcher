import { Dream, RequestCreateDream, RequestDeleteDream, RequestGetDream, RequestPatchDream, ResponseCreateDream, ResponseDeleteDream, ResponseGetDream, ResponsePatchDream } from '../../types/Dream';
import { nodeEndPoints } from './endPoints';
import { client } from './instance';
import { AxiosResponse } from 'axios';

export const getDreams = () => client.get<Dream[]>(nodeEndPoints.dreams);
export const getDream = (dreamId: string) => client.get<Dream[]>(`${nodeEndPoints.dreams}/${dreamId}`);


export const dreamAPI = {
  create({ dream, token }: RequestCreateDream) {
    return client.post<Dream, AxiosResponse<ResponseCreateDream>>(
      nodeEndPoints.dreams, 
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
      `${nodeEndPoints.dreams}/${dreamId}`,
    );
  },

  update({ dream, token }: RequestPatchDream) {
    return client.patch<Dream, AxiosResponse<ResponsePatchDream>>(
      `${nodeEndPoints.dreams}/${dream.id}`, 
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
      `${nodeEndPoints.dreams}/${dreamId}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      },
    );
  },
};
