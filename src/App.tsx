import React from 'react';
import { RecoilRoot } from 'recoil';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppRoutes from './app/AppRoutes';
import Error from './pages/Error';
import './App.css';

const router = createBrowserRouter([
  { path: '*', element: <AppRoutes />, errorElement: <Error /> },
]);

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <RouterProvider router={router} />
      </RecoilRoot>
    </div>
  );
}

export default App;
