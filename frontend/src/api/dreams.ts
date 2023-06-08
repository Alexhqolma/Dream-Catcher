import { client } from './axiosClient';

export const getAllDreams = () => client.get<[]>('/todos');
