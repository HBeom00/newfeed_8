import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../pages/Main';
import LogIn from '../pages/LogIn';
import SignUp from '../pages/SignUp';
import DetailPage from '../pages/DetailPage';
import Mypage from '../pages/MyPage';
import Writing from '../pages/Writing';
import ProtectedMain from '../pages/ProtectedMain';
import { ProtectedRoute } from './ProtectedRoute';
import { useLoginContext } from '../context/LoginContext';

const Router = () => {
  const { isSignIn, checkSignIn } = useLoginContext();
  checkSignIn();

  const publicRoutes = [
    {
      path: '/detail',
      element: <DetailPage />
    }
  ];

  const routesForNotAuthenticatedOnly = [
    {
      path: '/',
      element: <Main />
    },
    {
      path: '/login',
      element: <LogIn />
    },
    {
      path: '/signup',
      element: <SignUp />
    }
  ];

  const routesForAuthenticatedOnly = [
    {
      path: '',
      element: <ProtectedRoute />,
      children: [
        {
          path: '/',
          element: <ProtectedMain />
        },
        {
          path: '/mypage',
          element: <Mypage />
        },
        {
          path: '/writing',
          element: <Writing />
        }
      ]
    }
  ];

  const router = createBrowserRouter([
    ...publicRoutes,
    ...(!isSignIn ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
