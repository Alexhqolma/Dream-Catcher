import { Dream } from '../../types/Dream';
import { clientJava } from './instanceJava';

export const getAllDreams = () => clientJava.get<Dream>('/wishes');

export const getCreatedDreams = (userId: string) => clientJava.get<Dream[]>(`/wishes/user/${userId}`);

export const getTakenDreams = (userId: string) => clientJava.get<Dream[]>(`/wishes/taken-user/${userId}`);

export const createDream = (
  dream: Omit<Dream, 'id'> | FormData,
  // token: string,
) => clientJava.post<Dream>('/wishes/create', {
  data: dream,
  // headers: {
  //   'Authorization': `Bearer ${token}`
  // },
});

export const getSearchDreams = (query: string) => clientJava.get<Dream>(`/wishes/search/${query}`);
