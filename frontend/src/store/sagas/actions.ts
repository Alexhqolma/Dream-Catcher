import { User } from "../../types/User";

// create saga actions ONLY
export const sagaActions = {
  FETCH_DREAMS_DATA: 'saga/FETCH_DREAMS_DATA',
  FETCH_USER: 'saga/FETCH_USER',
  REGISTER_USER: 'saga/REGISTER_USER',
  FETCH_MOCK_DATA: 'saga/FETCH_MOCK_DATA',
};

const sagaActionsCreator = {
  loadDreams: () => ({ type: sagaActions.FETCH_DREAMS_DATA }),
  loadUser: () => ({ type: sagaActions.FETCH_USER }),
  loadMockUsers: () => ({ type: sagaActions.FETCH_MOCK_DATA }),
  registerUser: (user: Omit<User, 'userId'>) => ({ 
    type: sagaActions.REGISTER_USER, 
    payload: user,
  }),
};

export const {
  loadDreams,
  loadUser,
  loadMockUsers,
  registerUser,
} = sagaActionsCreator;
