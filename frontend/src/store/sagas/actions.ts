import { RequestLoginUser, RequestCreateUser } from './../../types/User';

// create saga actions ONLY
export enum SagaActions {
  FETCH_MOCK_DATA = 'saga/FETCH_MOCK_DATA',

  REGISTER_USER_NODE = 'saga/REGISTER_USER_NODE',
  LOGIN_USER_NODE = 'saga/LOGIN_USER_NODE',
  FETCH_USER_NODE = 'saga/FETCH_USER_NODE',

  FETCH_ALL_DREAMS = 'saga/FETCH_ALL_DREAMS',
}

const sagaActionsCreator = {
  loadMockUsers: () => ({ type: SagaActions.FETCH_MOCK_DATA }),

  registerUserNODE: (user: RequestCreateUser) => ({ 
    type: SagaActions.REGISTER_USER_NODE, 
    payload: user,
  }),
  loginUserNODE: (userLogin: RequestLoginUser) => ({ 
    type: SagaActions.LOGIN_USER_NODE, 
    payload: userLogin,
  }),
  loadUserNODE: (token: string) => ({ 
    type: SagaActions.FETCH_USER_NODE,
    payload: token,
  }),

  loadDreams: () => ({ type: SagaActions.FETCH_ALL_DREAMS }),
};

export const {
  registerUserNODE,
  loginUserNODE,
  loadUserNODE,

  loadDreams,
  loadMockUsers,
} = sagaActionsCreator;
