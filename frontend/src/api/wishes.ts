import { client } from './axiosClient';

export const getAllWishes = () => client.get<[]>('/todos');
