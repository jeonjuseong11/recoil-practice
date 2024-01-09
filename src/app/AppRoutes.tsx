import * as React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Layout from '../components/Layout';
import { useRecoilValue } from 'recoil';
import { isLoggedInSelector } from '../recoil/auth';
import Home from '../pages/Home';

function AppRoutes() {
  const isLoggedIn = useRecoilValue(isLoggedInSelector);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/"
          element={isLoggedIn ? <Home /> : <Navigate replace to="/login" />}
        />
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate replace to="/" /> : <Login />}
        />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
