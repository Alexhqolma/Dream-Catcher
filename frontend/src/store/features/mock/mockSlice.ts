import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../..';
import { User } from '../../../types/User';
import { Dream } from '../../../types/Dream';

export interface mockState {
  users: User[];
  dreams: Dream[];
  statusLoading: 'idle' | 'loading' | 'failed';
  error: string | null;
}

const initialState: mockState = {
  users: [],
  dreams: [],
  statusLoading: 'idle',
  error: null,
};

const mockSlice = createSlice({
  name: 'mock',
  initialState,
  reducers: {
    setMockUsers: (state: mockState, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    setMockDreams: (state: mockState, action: PayloadAction<Dream[]>) => {
      state.dreams = action.payload.map(e => ({
        ...e,
        executantId: null,
      }));
    },
    setStatus: (
      state: mockState,
      action: PayloadAction<'idle' | 'loading' | 'failed'>,
    ) => {
      state.statusLoading = action.payload;
    },
    setError: (state: mockState, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.statusLoading = 'failed';
    },
    resetState: () => {
      return initialState;
    },
  },
});

export default mockSlice.reducer;
export const {
  setMockUsers,
  setMockDreams,
  setStatus,
  setError,
  resetState,
} = mockSlice.actions;

export const selectMockUsers = (state: RootState) => state.mock.users;
export const selectMockDreams = (state: RootState) => state.mock.dreams;
export const selectMockUsersStatusLoading
= (state: RootState) => state.mock.statusLoading;
export const selectMockUsersError = (state: RootState) => state.mock.error;
