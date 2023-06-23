import { RequestCreateDream } from '../../types/Dream';
import { RequestLoginUser, RequestCreateUser } from './../../types/User';

// create saga actions ONLY
export enum SagaActions {
  FETCH_MOCK_DATA = 'saga/FETCH_MOCK_DATA',

  REGISTER_USER_NODE = 'saga/REGISTER_USER_NODE',
  LOGIN_USER_NODE = 'saga/LOGIN_USER_NODE',
  FETCH_USER_NODE = 'saga/FETCH_USER_NODE',
  DELETE_USER_NODE = 'saga/DELETE_USER_NODE',

  FETCH_ALL_DREAMS = 'saga/FETCH_ALL_DREAMS',
  CREATE_DREAM = 'saga/CREATE_DREAM',

  REGISTER_USER_JAVA = 'saga/REGISTER_USER_JAVA',
  LOGIN_USER_JAVA = 'saga/LOGIN_USER_JAVA',
  FETCH_USER_JAVA = 'saga/FETCH_USER_JAVA',
  DELETE_USER_JAVA = 'saga/DELETE_USER_JAVA',
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
  deleteUserNODE: (token: string) => ({ 
    type: SagaActions.DELETE_USER_NODE,
    payload: token,
  }),

  loadDreams: () => ({ type: SagaActions.FETCH_ALL_DREAMS }),
  createDream: (payload: RequestCreateDream) => ({ 
    type: SagaActions.REGISTER_USER_NODE, 
    payload,
  }),

  registerUserJAVA: (user: RequestCreateUser) => ({ 
    type: SagaActions.REGISTER_USER_JAVA, 
    payload: user,
  }),
  loginUserJAVA: (userLogin: RequestLoginUser) => ({ 
    type: SagaActions.LOGIN_USER_JAVA, 
    payload: userLogin,
  }),
  loadUserJAVA: (token: string) => ({ 
    type: SagaActions.FETCH_USER_JAVA,
    payload: token,
  }),
  deleteUserJAVA: (token: string) => ({ 
    type: SagaActions.DELETE_USER_JAVA,
    payload: token,
  }),
};

export const {
  registerUserNODE,
  loginUserNODE,
  loadUserNODE,
  deleteUserNODE,
  
  loadDreams,

  registerUserJAVA,
  loginUserJAVA,
  loadUserJAVA,
  deleteUserJAVA,

  loadMockUsers,
} = sagaActionsCreator;
