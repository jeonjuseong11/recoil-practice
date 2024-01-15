import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Layout from '../components/Layout';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { isLoggedInSelector, userStateSelector } from '../recoil/auth';
import Home from '../pages/Home';
import EmailVerification from '../pages/EmailVerification';
import AccountSetup from '../pages/AccountSetup';
import NotFoundError from '../pages/404Error';
import Error from '../pages/Error';

function AppRoutes() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInSelector);
  const setUser = useSetRecoilState(userStateSelector);

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
        <Route
          path="/"
          // element={isLoggedIn ? <Home /> : <Navigate replace to="/login" />}
          element={<Home />}
        />
        <Route
          path="/login"
          // element={isLoggedIn ? <Navigate replace to="/" /> : <Login />}
          element={<Login />}
        />
        <Route path="/signup/1" element={<EmailVerification />} />
        <Route path="/signup/2" element={<AccountSetup />} />
        <Route path="*" element={<NotFoundError />} />
      </Route>
      <Route path="/error" element={<Error />} />
    </Routes>
  );
}

export default AppRoutes;
