import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../../store';
import { MockUser } from '../../../../types/User';
import { Dream } from '../../../../types/Dream';
import { MockPhoto } from '../../../../types/MockPhoto';

export interface MockState {
  users: MockUser[];
  dreams: Dream[];
  photos: string[];
  mockData: Dream[];
  statusLoading: 'idle' | 'loading' | 'failed';
  error: string | null;
}

const initialState: MockState = {
  users: [],
  dreams: [],
  photos: [],
  mockData: [],
  statusLoading: 'idle',
  error: null,
};

const mockSlice = createSlice({
  name: 'mock',
  initialState,
  reducers: {
    setMockUsers: (state: MockState, action: PayloadAction<MockUser[]>) => {
      state.users = action.payload;
    },
    setMockDreams: (state: MockState, action: PayloadAction<Dream[]>) => {
      state.dreams = action.payload.map(e => ({
        ...e,
        executantId: null,
        photo: '',
      }));
    },
    setMockPhotos: (state, action: PayloadAction<MockPhoto[]>) => {
      state.photos = action.payload.map(e => e.download_url );
    },
    setMockData: (state, action: PayloadAction<Dream[]>) => {
      state.mockData = action.payload;
    },
    removeMockItem: (state, action: PayloadAction<Dream>) => {
      state.mockData = state.mockData.filter(el => el.id !== action.payload.id);
    },

    setStatus: (
      state: MockState,
      action: PayloadAction<'idle' | 'loading' | 'failed'>,
    ) => {
      state.statusLoading = action.payload;
    },
    setError: (state: MockState, action: PayloadAction<string>) => {
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
  setMockPhotos,
  setMockData,
  setStatus,
  setError,
  removeMockItem,
  resetState,
} = mockSlice.actions;

export const selectMockUsers = (state: RootState) => state.mock.users;
export const selectMockDreams = (state: RootState) => state.mock.dreams;
export const selectMockPhotos = (state: RootState) => state.mock.photos;
export const selectMockData = (state: RootState) => state.mock.mockData;
export const selectMockUsersStatusLoading
= (state: RootState) => state.mock.statusLoading;
export const selectMockUsersError = (state: RootState) => state.mock.error;
