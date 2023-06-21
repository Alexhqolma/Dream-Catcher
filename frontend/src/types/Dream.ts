import { Message } from "./Message";

export enum DreamsStatus {
  PENDING = 'PENDING',
  POSTED = 'POSTED',
  TAKEN = 'TAKEN',
  COMPLETED = 'COMPLETED',
}

export type Dream = {
  id?: string;
  title: string;
  body: string;
  status?: DreamsStatus;
  // tags?: string[];
  userId: string;
  handler: string | null;
  imageUrl?: string | null,
  tags: string[],
  creationDate?: string | null;
};
