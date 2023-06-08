import { client } from './axiosClient';

export const getAllUsers = () => client.get<[]>('/users');
export const getFirstUser = () => client.get<[]>('/users/1');
