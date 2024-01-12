export interface User {
  username: string;
  email: string;
  token?: string;
  refreshToken?: string;
  role?: string;
}
export interface LoginInfo {
  userId: string;
  password: string;
}
