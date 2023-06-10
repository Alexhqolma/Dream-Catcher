import { client } from "./mockAxiosClientPhoto";

export const getPhotos = () => client.get<[]>('');