import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../..';
import { User } from '../../../types/User';

export interface UserState {
  storage: {
    name: string,
    id: string,
    token: string,
  } | null;
  statusLoading: 'idle' | 'loading' | 'failed';
  error: string | null;
}

const initialState: UserState = {
  storage: null,
  statusLoading: 'idle',
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state: UserState, action: PayloadAction<{
      name: string,
      id: string,
      token: string,
    }>) => {
      state.storage = action.payload;
    },
    setStatus: (
      state: UserState,
      action: PayloadAction<'idle' | 'loading' | 'failed'>,
    ) => {
      state.statusLoading = action.payload;
    },
    setError: (state: UserState, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.statusLoading = 'failed';
    },
    resetState: () => {
      return initialState;
    },
  },
});

export default userSlice.reducer;
export const {
  setUser,
  setStatus,
  setError,
  resetState,
} = userSlice.actions;

export const selectUser = (state: RootState) => state.user.storage;
export const selectUserStatusLoading
= (state: RootState) => state.user.statusLoading;
export const selectUserError = (state: RootState) => state.user.error;
