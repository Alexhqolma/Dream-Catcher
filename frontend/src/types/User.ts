export interface UserLogin {
  password: string,
  email: string,
}

export interface User extends UserLogin {
  userId: string,
  fullName: string,
  avatarUrl?: string,
}

export type MockUser = {
  id: number;
  name: string;
}
