interface IVerificationCode {
  email: string;
  code: string;
}
interface ILogin {
  email: string;
  password: string;
}
interface ISignUp {
  email: string;
  password: string;
  username: string;
}

export const login = (formData: ILogin) => ({
  method: 'POST',
  url: '/login',
  data: formData,
});
export const logout = () => ({
  method: 'POST',
  url: '/logout',
});
export const signup = (formData: ISignUp) => ({
  method: 'POST',
  url: '/signup',
  data: { formData },
});
export const sendVerificationCode = (formData: { email: string }) => ({
  method: 'POST',
  url: '/send-verification-email',
  data: formData,
});
export const verifyEmail = (formData: IVerificationCode) => ({
  method: 'POST',
  url: '/verify-email',
  data: formData,
});

export const updateToken = (token: string) => ({
  method: 'POST',
  url: '/update-token',
  data: { token },
});
