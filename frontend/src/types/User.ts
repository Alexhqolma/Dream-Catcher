export interface UserLogin {
  password: string,
  name: string,
  // email?: string,
}

export interface User extends UserLogin {
  userId: string,
  avatarUrl?: string,
}

export type MockUser = {
  id: number;
  name: string;
}
