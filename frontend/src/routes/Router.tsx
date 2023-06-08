import { createBrowserRouter } from 'react-router-dom';
import { NotFoundPage } from '../pages';

import { routes } from './routerConfig';

const { home, login, registration, dream, dreams, user } = routes;

export const router = createBrowserRouter([
  {
    path: home.path,
    element: <home.element.App />,
    errorElement: <NotFoundPage />,
    id: 'root',
    children: [
      {
        path: home.path,
        element: <home.element.HomePage />,
        id: home.name,
        errorElement: <NotFoundPage />,
      },
      {
        path: login.path,
        element: <login.element />,
        id: login.name,
        errorElement: <>Error on `${login.name}`</>,
      },
      {
        path: registration.path,
        element: <registration.element />,
        id: registration.name,
        errorElement: <>Error on `${registration.name}`</>,
      },
      {
        path: dreams.path,
        element: <dreams.element />,
        id: dreams.name,
        errorElement: <>Error on `${dreams.name}`</>,
      },
      {
        path: dream.path.dreamId,
        element: <dream.element />,
        id: dream.name,
        errorElement: <>Error on `${dream.path.dreamId}`</>,
      },
      {
        path: user.path.parent,
        element: <user.element />,
        errorElement: <>Error on `${user.name}`</>,
        children: [
          {
            path: user.path.userId,
            element: <user.element />,
            errorElement: <>Error on `${user.path.userId}`</>,
          }
        ],
      },
    ],
  },
]);
