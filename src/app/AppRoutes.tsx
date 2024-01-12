import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Layout from '../components/Layout';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { isLoggedInSelector, userStateSelector } from '../recoil/auth';
import Home from '../pages/Home';
import EmailVerification from '../pages/EmailVerification';
import AccountSetup from '../pages/AccountSetup';

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
          element={isLoggedIn ? <Home /> : <Navigate replace to="/login" />}
        />
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate replace to="/" /> : <Login />}
        />
        <Route path="/signup/1" element={<EmailVerification />} />
        <Route path="/signup/2" element={<AccountSetup />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
