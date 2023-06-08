import { User } from "../../types/User";

// create saga actions ONLY
export const sagaActions = {
  FETCH_DREAMS_DATA: 'saga/FETCH_DREAMS_DATA',
  FETCH_USER: 'saga/FETCH_USER',
};

const sagaActionsCreator = {
  loadDreams: () => ({ type: sagaActions.FETCH_DREAMS_DATA }),
  loadUser: () => ({ type: sagaActions.FETCH_USER }),
  postUser: (url: string, user: Omit<User, 'userId'> ) => ({ type: sagaActions.FETCH_USER, payload: url, user }),
};

export const {
  loadDreams,
  loadUser,
  postUser,
} = sagaActionsCreator;
