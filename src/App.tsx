import React from 'react';
import AppRoutes from './app/AppRoutes';
import { RecoilRoot } from 'recoil';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
const router = createBrowserRouter([
  { path: '*', element: <AppRoutes />, errorElement: <>error</> },
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
