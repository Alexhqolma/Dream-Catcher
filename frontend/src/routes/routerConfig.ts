import { App } from "../App";

import { 
  HomePage,
  LoginPage,
  RegistrationPage,
  DreamsPage,
  DreamPage,
  UserPage,
  FavoritesPage,
} from '../pages';

export const routes = {
  home: {
    path: '/',
    name: { root: 'root', child: 'HomePage'},
    element: { App, HomePage }
  },
  login: {
    path: '/login',
    name: 'LoginPage',
    element: LoginPage,
  },
  registration: {
    path: '/registration', 
    name: 'RegistrationPage', 
    element: RegistrationPage,
  },

  dreams: {
    path: '/dreams',
    name: 'DreamsPage',
    element: DreamsPage,
  },

  dream: {
    path: {
      parent: '/dream/',
      dreamId: '/dream/:dreamId',
    },
    name: 'DreamPage',
    element: DreamPage,
  },

  user: {
    path: {
      parent: '/user',
      userId: '/user/:userId',
    },
    name: 'UserPage',
    element: UserPage,
  },

  favorites: {
    path: '/favorites',
    name: 'FavoritesPage',
    element: FavoritesPage,
  },

  rootError: {
    path: '*',
  },
};
