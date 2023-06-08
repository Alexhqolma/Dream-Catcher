// create saga actions ONLY
export const sagaActions = {
  FETCH_DREAMS_DATA: 'saga/FETCH_DREAMS_DATA',
};

const sagaActionsCreator = {
  loadDreams: () => ({ type: sagaActions.FETCH_DREAMS_DATA }),
};

export const {
  loadDreams,
} = sagaActionsCreator;
