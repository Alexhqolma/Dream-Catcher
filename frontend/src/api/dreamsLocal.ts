import { Dream } from '../types/Dream';
import { User } from '../types/User';
import { clientLocal } from './axiosClientLocal';

export const getAllDreamsLocal = () => clientLocal.get<Dream[]>('/wishes');

export const loginUser = () => clientLocal.post<User>('/login', {
  name: 'admin',
  password: 'adminadmin',
});