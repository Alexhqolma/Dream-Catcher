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
import rootSaga from './sagas/root';
import controlsSlice from './features/controls/controlsSlice';
import dreamsSlice from './features/dreams/dreamsSlice';
import userSlice from './features/user/userSlice';
import mockUsersSlice from '../mock/store/features/mock/mockSlice';

const sagaMiddleware = createSagaMiddleware();

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
  dreams: dreamsSlice,
  user: userSlice,
  mock: mockUsersSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

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
