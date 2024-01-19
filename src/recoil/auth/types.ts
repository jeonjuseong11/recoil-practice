export interface User {
  username: string;
  email: string;
  token?: string;
  refreshToken?: string;
  role?: string;
  userPhn?: string | null;
  userRole?: string | null;
  userImg?: string | null;
}
export interface LoginInfo {
  userId: string;
  password: string;
}
