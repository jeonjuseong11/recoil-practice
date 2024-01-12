import AppRoutes from './app/AppRoutes';
import { RecoilRoot } from 'recoil';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Error from './pages/Error';
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
