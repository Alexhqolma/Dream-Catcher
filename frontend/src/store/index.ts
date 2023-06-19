import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage';
import rootSaga from './sagas/rootSaga';
import controlsSlice from './features/controls/controlsSlice';
import allDreamsSlice from './features/allDreams/allDreamsSlice';
import userSlice from './features/user/userSlice';
import mockUsersSlice from '../mock/store/features/mock/mockSlice';
import takenDreamsSlice from './features/takenDreams/takenDreamsSlice';
import createdDreamsSlice from './features/createdDreams/createdDreamsSlice';
import editDreamSlice from './features/editDream/editDreamSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [
    'basket',
    // 'dreams', // don't save dreams state in local storage
  ],
  blacklist: ['user'],
};

const rootReducer = combineReducers({
  control: controlsSlice,
  user: userSlice,
  allDreams: allDreamsSlice,
  createdDreams: createdDreamsSlice,
  takenDreams: takenDreamsSlice,
  editDream: editDreamSlice,
    
  mock: mockUsersSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: false,
    serializableCheck: {
      ignoredActions: [
        FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,
        // 'posts',
      ],
    },
  }).concat(sagaMiddleware),
});

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
