// create saga actions ONLY
export const sagaActions = {
  FETCH_WISHES_DATA: 'saga/FETCH_WISHES_DATA',
};

const sagaActionsCreator = {
  loadWishes: () => ({ type: sagaActions.FETCH_WISHES_DATA }),
};

export const {
  loadWishes,
} = sagaActionsCreator;
