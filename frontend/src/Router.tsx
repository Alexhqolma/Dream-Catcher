import { createBrowserRouter } from 'react-router-dom';
import { App } from './App';
import { PageNotFound } from './pages/PageNotFound';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { RegistrationPage } from './pages/RegistrationPage';
import { DreamPage } from './pages/DreamPage';
import { UserPage } from './pages/UserPage';
import { DreamsPage } from './pages/DreamsPage';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <PageNotFound />,
    id: 'root',
    children: [
      {
        path: '/',
        element: <HomePage />,
        id: 'homePage',
        errorElement: <>Error on HomePage</>,
      },
      {
        path: '/login',
        element: <LoginPage />,
        id: 'loginPage',
        errorElement: <>Error on BasketPage</>,
      },
      {
        path: '/registration',
        element: <RegistrationPage />,
        id: 'registrationPage',
        errorElement: <>Error on BasketPage</>,
      },
      {
        path: '/dreams',
        element: <DreamsPage />,
        id: 'dreamsPage',
        errorElement: <>Error on DreamsPage</>,
      },
      {
        path: '/dream',
        element: <DreamPage />,
        id: 'dreamPage',
        errorElement: <>Error on DreamPage</>,
        children: [
          {
            path: '/dream/:dreamId',
            element: <DreamPage />,
            errorElement: <>Error on DreamPage</>,
          },
        ],
      },
      {
        path: '/user',
        element: <UserPage />,
        errorElement: <>Error on UserPage</>,
        children: [
          {
            path: '/user/:userId',
            element: <UserPage />,
            errorElement: <>Error on CurrentUserPage</>,
          }
        ],
      },
    ],
  },
]);

