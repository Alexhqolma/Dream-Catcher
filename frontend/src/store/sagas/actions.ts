import { Dream, DreamsStatus, RequestCreateDream, RequestGetDream, RequestPatchDream } from '../../types/Dream';
import { RequestLoginUser, RequestCreateUser } from './../../types/User';

// create saga actions ONLY
export enum SagaActions {
  FETCH_MOCK_DATA = 'saga/FETCH_MOCK_DATA',

  REGISTER_USER_NODE = 'saga/REGISTER_USER_NODE',
  LOGIN_USER_NODE = 'saga/LOGIN_USER_NODE',
  FETCH_USER_NODE = 'saga/FETCH_USER_NODE',
  DELETE_USER_NODE = 'saga/DELETE_USER_NODE',

  FETCH_ALL_DREAMS = 'saga/FETCH_ALL_DREAMS',
  FETCH_DREAM = 'saga/FETCH_DREAM',
  CREATE_DREAM = 'saga/CREATE_DREAM',
  UPDATE_DREAM = 'saga/UPDATE_DREAM',

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

  loadAllDreams: () => ({ type: SagaActions.FETCH_ALL_DREAMS }),
  loadDream: (payload: RequestGetDream) => ({ 
    type: SagaActions.FETCH_DREAM, 
    payload,
  }),
  createDream: (payload: RequestCreateDream) => ({ 
    type: SagaActions.CREATE_DREAM, 
    payload,
  }),
  updateDream: (payload: RequestPatchDream) => ({ 
    type: SagaActions.UPDATE_DREAM, 
    payload,
  }),
  takeDream:  (payload: RequestPatchDream) => updateDream({ 
    dream: { ...payload.dream, status: DreamsStatus.TAKEN }, 
    token: payload.token 
  }),
  refuseDream:  (payload: RequestPatchDream) => updateDream({ 
    dream: { ...payload.dream, status: DreamsStatus.POSTED }, 
    token: payload.token 
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

// const takeDream = (dream: Dream, token: string) => {
//   const takeDream = { ...dream, status: DreamsStatus.TAKEN};

//   return sagaActionsCreator.updateDream({ dream: takeDream, token });
// }

export const {
  registerUserNODE,
  loginUserNODE,
  loadUserNODE,
  deleteUserNODE,
  
  loadAllDreams,
  loadDream,
  createDream,
  updateDream,
  takeDream,
  refuseDream,

  registerUserJAVA,
  loginUserJAVA,
  loadUserJAVA,
  deleteUserJAVA,

  loadMockUsers,
} = sagaActionsCreator;
