import { client } from './mockAxiosClient';

export const getAllDreams = () => client.get<[]>('/posts');
