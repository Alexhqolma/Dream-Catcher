import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../..';

export interface UserState {
  storage: { userId: string } |null;

  isAuth: boolean;
  fullName: string | null;
  token: string | null;
  statusLoading: 'idle' | 'loading' | 'failed';
  error: string | null;
}

const initialState: UserState = {
  storage: null,

  isAuth: false,
  fullName: null,
  token: null,
  statusLoading: 'idle',
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state: UserState) => {
      state.isAuth = true;
    },
    logout: () => {
      return initialState;
    },
    setToken: (state: UserState, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setFullName: (state: UserState, action: PayloadAction<string>) => {
      state.fullName = action.payload;
    },
    setUserId: (state: UserState, action: PayloadAction<string>) => {
      state.storage = { ...state.storage, userId: action.payload };
    },
    setStatus: (
      state: UserState,
      action: PayloadAction<'idle' | 'loading' | 'failed'>,
    ) => {
      state.statusLoading = action.payload;
    },
    setError: (state: UserState, action: PayloadAction<string>) => {
      console.log('serError ', action.payload);
      state.error = action.payload;
      state.statusLoading = 'idle';
    },
    resetError: (state: UserState) => {
      state.error = null;
      state.statusLoading = 'idle';
    },
    resetState: () => {
      return initialState;
    },
  },
});

export default userSlice.reducer;
export const {
  login,
  logout,
  setToken,
  setFullName,
  setStatus,
  setError,
  setUserId,
  resetError,
  resetState,
} = userSlice.actions;

export const selectIsAuth = (state: RootState) => state.user.isAuth;
export const selectUser = (state: RootState) => state.user.storage;
export const selectToken = (state: RootState) => state.user.token;
export const selectFullName = (state: RootState) => state.user.fullName;

export const selectUserStatusLoading
= (state: RootState) => state.user.statusLoading;
export const selectUserError = (state: RootState) => state.user.error;
