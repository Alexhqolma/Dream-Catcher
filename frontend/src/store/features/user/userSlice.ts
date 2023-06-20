import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../..';
import { User } from '../../../types/User';

export interface UserState {
  storage: User |null;

  userName: string | null;
  token: string | null;
  statusLoading: 'idle' | 'loading' | 'failed';
  error: string | null;
}

const initialState: UserState = {
  storage: null,

  userName: null,
  token: null,
  statusLoading: 'idle',
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state: UserState, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setName: (state: UserState, action: PayloadAction<string>) => {
      state.userName = action.payload;
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
  setToken,
  setName,
  setStatus,
  setError,
  resetError,
  resetState,
} = userSlice.actions;

export const selectUser = (state: RootState) => state.user.storage;
export const selectToken = (state: RootState) => state.user.token;
export const selectName = (state: RootState) => state.user.userName;

export const selectUserStatusLoading
= (state: RootState) => state.user.statusLoading;
export const selectUserError = (state: RootState) => state.user.error;
