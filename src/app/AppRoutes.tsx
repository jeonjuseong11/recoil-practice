import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Layout from '../components/Layout';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  isLoggedInSelector,
  userEmailVerifiedSelector,
  userStateSelector,
} from '../recoil/auth';
import Home from '../pages/Home';
import EmailVerification from '../pages/EmailVerification';
import AccountSetup from '../pages/AccountSetup';
import NotFoundError from '../pages/404Error';
import Error from '../pages/Error';

function AppRoutes() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInSelector);
  const setUser = useSetRecoilState(userStateSelector);
  const isEmailVerified = useRecoilValue(userEmailVerifiedSelector);

  useEffect(() => {
    const storedUser = sessionStorage.getItem('user');
    const isLoggedIn = sessionStorage.getItem('token') === 'true';

    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
    setIsLoggedIn(isLoggedIn);
  }, []);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route
        path="/login"
        element={isLoggedIn ? <Navigate replace to="/" /> : <Login />}
      />
      <Route path="/signup/1" element={<EmailVerification />} />
      <Route
        path="/signup/2"
        element={
          isEmailVerified ? (
            <AccountSetup />
          ) : (
            <Navigate to="/signup/1" replace />
          )
        }
      />
      <Route path="*" element={<NotFoundError />} />
      <Route path="/error" element={<Error />} />
    </Routes>
  );
}

export default AppRoutes;
