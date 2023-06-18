import { Dream } from '../../types/Dream';
import { clientLocal } from './instanceJava';

export const getAllDreams = () => clientLocal.get<Dream>('/wishes');

export const getCreatedDreams = (userId: string) => clientLocal.get<Dream[]>(`/wishes/user/${userId}`);

export const getTakenDreams = (userId: string) => clientLocal.get<Dream[]>(`/wishes/taken-user/${userId}`);

export const createDream = (dream: Omit<Dream, 'id'>, token: string) => clientLocal.post<Dream>('/wishes/create', {
  data: dream,
  headers: {
    'Authorization': `Bearer ${token}`
  },
});

export const getSearchDreams = (query: string) => clientLocal.get<Dream>(`/wishes/search/${query}`);
