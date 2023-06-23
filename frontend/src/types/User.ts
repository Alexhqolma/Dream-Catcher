export interface User {
  userId: string;
  email: string;
  password: string;
  fullName: string;
  avatarUrl?: string;
}

export interface RequestCreateUser { email: string; password: string; fullName: string; }
export interface ResponseCreateUser { success: boolean; message: string; }
export interface ResponseCreateUserWithError { success: boolean; message: string; }

export interface RequestLoginUser { email: string; password: string; }
export interface ResponseLoginUser { success: boolean; fullName: string; token: string; userId: string; }
export interface ResponseLoginUserWithError { success: boolean; message: string; }

export interface RequestGetUser { token: string; }
export interface ResponseGetUser { success: boolean; email: string; fullName: string; token: string; userId: string; }
export interface ResponseGetUserWithError { success: boolean; message: string; }

export interface RequestDeleteUser { token: string; }
export interface ResponseDeleteUser { success: boolean; message: string; }
export interface ResponseDeleteUserWithError { success: boolean; message: string; }