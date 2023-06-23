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


export interface RequestCreateDream { dream: Dream; token: string; }
export interface ResponseCreateDream { success: boolean; message: string; dream: Dream; }
export interface ResponseCreateDreamWithError { success: boolean; message: string; }

export interface RequestGetDream { dreamId: string; }
export interface ResponseGetDream { success: boolean; message: string; dreams: Dream[]; }
export interface ResponseGetDreamWithError { success: boolean; message: string; }

export interface RequestPatchDream { dream: Dream; token: string; }
export interface ResponsePatchDream { success: boolean; message: string; dream: Dream; }
export interface ResponsePatchDreamWithError { success: boolean; message: string; }

export interface RequestDeleteDream { dreamId: string; token: string; }
export interface ResponseDeleteDream { success: boolean; message: string; }
export interface ResponseDeleteDreamWithError { success: boolean; message: string; }
