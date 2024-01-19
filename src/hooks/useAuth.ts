import { useSetRecoilState } from 'recoil';
import { userStateSelector } from '../recoil/auth';
import useAxios from './useAxios';
import {
  login,
  logout,
  signup,
  sendVerificationCode,
  verifyEmail,
  ISignUp,
  ILogin,
  IVerificationCode,
  loadProfile,
} from '../api';
import { instance } from '../api/apiClient';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const setUser = useSetRecoilState(userStateSelector);
  const { sendRequest, loading, done } = useAxios();
  const navigate = useNavigate();

  const handleSendVerificationEmail = async (email: string) => {
    await sendRequest(
      sendVerificationCode({ email }),
      () => {
        alert(
          `${email}에 인증메일을 보냈습니다.\n메일에서 인증코드를 확인해주세요`
        );
      },
      (error) => {
        console.error(error);
        alert('인증 코드 전송 실패');
      }
    );
  };

  const handleVerifyCode = async (formData: IVerificationCode) => {
    await sendRequest(
      verifyEmail(formData),
      () => {
        navigate('/signup/2', { state: { email: formData.email } });
      },
      (error) => {
        console.error(error);
        alert('인증 코드 검증 실패');
      }
    );
  };

  const handleSignup = async (formData: ISignUp) => {
    await sendRequest(
      signup(formData),
      () => {
        alert('환영합니다. 로그인 페이지로 이동합니다.');
        navigate('/login');
      },
      (error) => {
        console.error(error);
        alert('회원가입 실패');
      }
    );
  };

  const handleLogin = async (formData: ILogin) => {
    await sendRequest(
      login(formData),
      (data) => {
        const { username, userId, role, token, refreshToken } = data.data;
        const userInfo = {
          username,
          email: userId,
          role,
        };
        setUser(userInfo);
        sessionStorage.setItem('user', JSON.stringify(userInfo));
        sessionStorage.setItem('token', JSON.stringify(refreshToken));
        instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        navigate('/');
      },
      (error) => {
        console.error(error);
        alert('로그인 실패: ' + error.message);
      }
    );
  };

  const handleLogout = async () => {
    await sendRequest(
      logout(),
      () => {
        sessionStorage.clear();
        setUser({ username: '', email: '' });
        delete instance.defaults.headers.common['Authorization'];
        navigate('/');
      },
      (error) => {
        console.error(error);
        alert('로그아웃 실패: ' + error.message);
      }
    );
  };

  const handleLoadProfile = async (userId: string) => {
    console.log(userId);
    await sendRequest(loadProfile(userId), (data) => {
      const { userEmail, userName, userPhn, userImg, userRole } = data.data;
      const userInfo = {
        email: userEmail,
        username: userName,
        userPhn,
        userImg,
        userRole,
      };
      setUser(userInfo);
      sessionStorage.setItem('user', JSON.stringify(userInfo));
    });
  };

  return {
    handleSendVerificationEmail,
    handleVerifyCode,
    handleSignup,
    handleLogin,
    handleLogout,
    handleLoadProfile,
    loading,
    done,
  };
};
export default useAuth;
