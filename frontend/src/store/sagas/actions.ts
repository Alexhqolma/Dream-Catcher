import { User, UserLogin } from './../../types/User';

// create saga actions ONLY
export enum SagaActions {
  FETCH_MOCK_DATA = 'saga/FETCH_MOCK_DATA',

  REGISTER_USER = 'saga/REGISTER_USER',
  LOGIN_USER = 'saga/LOGIN_USER',
  FETCH_USER = 'saga/FETCH_USER',

  FETCH_ALL_DREAMS = 'saga/FETCH_ALL_DREAMS',
};

const sagaActionsCreator = {
  loadMockUsers: () => ({ type: SagaActions.FETCH_MOCK_DATA }),

  registerUser: (user: Omit<User, 'userId'>) => ({ 
    type: SagaActions.REGISTER_USER, 
    payload: user,
  }),
  loginUser: (userLogin: UserLogin) => ({ 
    type: SagaActions.LOGIN_USER, 
    payload: userLogin,
  }),
  loadUser: (token: string) => ({ 
    type: SagaActions.FETCH_USER,
    payload: token,
  }),

  loadDreams: () => ({ type: SagaActions.FETCH_ALL_DREAMS }),
};

export const {
  registerUser,
  loginUser,
  loadUser,

  loadDreams,
  loadMockUsers,
} = sagaActionsCreator;
