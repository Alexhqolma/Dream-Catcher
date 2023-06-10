import { client } from './mockAxiosClient';

export const getAllUsers = () => client.get<[]>('/users');
export const getFirstUser = () => client.get<[]>('/users/1');

