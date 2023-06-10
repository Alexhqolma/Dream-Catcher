import { User } from '../types/User';
import { client } from './axiosClient';

export const getAllUsers = () => client.get<[]>('/users');
export const getFirstUser = () => client.get<[]>('/users/1');

export const postUser = (user: Omit<User, 'userId'>) => client.post<[]>('/users', user);

// export const login = (data: ) => client.post('/users/1', data);