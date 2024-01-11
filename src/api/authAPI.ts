import { instance } from './apiClient';

const authAPI = {
  login: (formData: { email: string; password: string }) =>
    instance.post('/login', formData),
  signup: (formData: { username: string; password: string; email: string }) =>
    instance.post('/signup', formData),
  logout: () => instance.post('/logout'),
  sendVerificationCode: (email: string) =>
    instance.post('/send-verification-email', { email }),
  verifyEmail: (data: { code: string; email: string }) =>
    instance.post('/verify-email', data),
  updateToken: (token: string) => instance.post('/update-token', { token }),
};

export default authAPI;
