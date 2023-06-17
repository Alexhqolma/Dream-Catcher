import { Dream } from '../types/Dream';
import { clientLocal } from './instanceLocal';

export const getAllDreams = () => clientLocal.get<Dream>('/wishes');

export const getCreatedDreams = (userId: string) => clientLocal.get<Dream[]>(`/wishes/user/${userId}`);

export const getTakenDreams = (userId: string) => clientLocal.get<Dream[]>(`/wishes/taken-user/${userId}`);

export const createDream = (data: Omit<Dream, 'id'>) => clientLocal.post<Dream>('/wishes/create', data);

export const getSearchDreams = (query: string) => clientLocal.get<Dream>(`/wishes/search/${query}`);
