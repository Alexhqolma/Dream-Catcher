import { client } from './axiosClient';

export const getAllUsers = () => client.get<[]>('/users');
export const getFirstUser = () => client.get<[]>('/users/1');

// export const login = (data: ) => client.post('/users/1', data);