import { App } from "../App";

import { 
  HomePage,
  LoginPage,
  RegistrationPage,
  DreamsPage,
  DreamPage,
  UserPage,
} from '../pages';

export const routes = {
  home: {
    path: '/',
    name: 'HomePage',
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
      parent: '',
      userId: '/user/:userId',
    },
    name: 'UserPage',
    element: UserPage,
  },
};
