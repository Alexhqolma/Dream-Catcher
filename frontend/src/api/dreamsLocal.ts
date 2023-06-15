import { client } from './axiosClientLocal';

export const getAllDreamsLocal = () => client.get<[]>('/wishes');
