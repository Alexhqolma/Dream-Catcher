import { User } from "../../types/User";

// create saga actions ONLY
export const sagaActions = {
  FETCH_DREAMS_DATA: 'saga/FETCH_DREAMS_DATA',
  FETCH_USER: 'saga/FETCH_USER',
  POST_USER: 'saga/POST_USER',
  FETCH_MOCK_USERS: 'saga/FETCH_MOCK_USERS',
};

const sagaActionsCreator = {
  loadDreams: () => ({ type: sagaActions.FETCH_DREAMS_DATA }),
  loadUser: () => ({ type: sagaActions.FETCH_USER }),
  loadMockUsers: () => ({ type: sagaActions.FETCH_MOCK_USERS }),
  postUser: (url: string, user: Omit<User, 'userId'> ) => ({ type: sagaActions.POST_USER, payload: url, user }),
};

export const {
  loadDreams,
  loadUser,
  loadMockUsers,
  postUser,
} = sagaActionsCreator;
