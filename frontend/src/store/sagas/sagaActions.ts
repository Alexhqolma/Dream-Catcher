// create saga actions ONLY
export const sagaActions = {
  FETCH_DREAMS_DATA: 'saga/FETCH_DREAMS_DATA',
  FETCH_USER: 'saga/FETCH_USER',
  FETCH_MOCK_USERS: 'saga/FETCH_MOCK_USERS',
};

const sagaActionsCreator = {
  loadDreams: () => ({ type: sagaActions.FETCH_DREAMS_DATA }),
  loadUser: () => ({ type: sagaActions.FETCH_USER }),
  loadMockUsers: () => ({ type: sagaActions.FETCH_MOCK_USERS }),
};

export const {
  loadDreams,
  loadUser,
  loadMockUsers,
} = sagaActionsCreator;
