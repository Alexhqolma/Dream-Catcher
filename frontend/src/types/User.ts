export interface UserCreate {
  email: string;
  password: string;
  fullName: string;
}

export interface UserLogin {
  email: string;
  password: string;
}
export interface User {
  userId: string;
  email: string;
  password: string;
  fullName: string;
  avatarUrl?: string;
}
