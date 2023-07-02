import { Navigate, createBrowserRouter } from 'react-router-dom';

import { routes } from './routerConfig';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

const { home, login, registration, dream, dreams, user, favorites, rootError } = routes;

export const router = createBrowserRouter([
  {
    path: home.path,
    element: <home.element.App />,
    errorElement: <NotFoundPage />,
    id: home.name.root,
    children: [
      {
        path: home.path,
        element: <home.element.HomePage />,
        id: home.name.child,
        errorElement: <NotFoundPage />,
      },
      {
        path: login.path,
        element: <login.element />,
        id: login.name,
        errorElement: <main>Error on {login.name}</main>,
      },
      {
        path: registration.path,
        element: <registration.element />,
        id: registration.name,
        errorElement: <main>Error on {registration.name}</main>,
      },
      {
        path: dreams.path,
        element: <dreams.element />,
        id: dreams.name,
        errorElement: <main>Error on {dreams.name}</main>,
      },
      {
        path: dream.path.dreamId,
        element: <dream.element />,
        id: dream.name,
        errorElement: <main>Error on {dream.path.dreamId}</main>,
      },
      {
        path: user.path.parent,
        element: <user.element />,
        errorElement: <main>Error on {user.name}</main>,
        children: [
          {
            path: user.path.userId,
            element: <user.element />,
            errorElement: <main>Error on {user.path.userId}</main>,
          }
        ],
      },
      {
        path: favorites.path,
        element: <favorites.element />,
        id: favorites.name,
        errorElement: <main>Error on `${favorites.path}`</main>,
      },
    ],
  },
  {
    path: rootError.path,
    element: rootError.element,
  }
]);

