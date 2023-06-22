export interface User {
  userId: string;
  email: string;
  password: string;
  fullName: string;
  avatarUrl?: string;
}

export type RequestCreateUser = {
  email: string;
  password: string;
  fullName: string;
};
export type ResponseCreateUser = { success: boolean; message: string; };
export type ResponseCreateUserWithError = { success: boolean; message: string; };

export type RequestLoginUser = {
  email: string;
  password: string;
};
export type ResponseLoginUser = {
  success: boolean;
  fullName: string;
  token: string;
  userId: string;
};
export type ResponseLoginUserWithError = { success: boolean; message: string; };

export type RequestGetUser = {
  token: string;
};
export type ResponseGetUser = {
  success: boolean;
  email: string;
  fullName: string;
  token: string;
  userId: string;
};
export type ResponseGetUserWithError = { success: boolean; message: string; };

export type RequestDeleteUser = {
  token: string;
};
export type ResponseDeleteUser = {
  success: boolean;
  message: string;
};
export type ResponseDeleteUserWithError = { success: boolean; message: string; };