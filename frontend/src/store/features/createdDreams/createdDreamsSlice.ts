import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../..';
import { Dream } from '../../../types/Dream';

export interface createdDreamsState {
  storage: Dream[];
  statusLoading: 'idle' | 'loading' | 'failed';
  error: string | null;
}

const initialState: createdDreamsState = {
  storage: [],
  statusLoading: 'idle',
  error: null,
};

const createdDreamsSlice = createSlice({
  name: 'createdDreams',
  initialState,
  reducers: {
    setDreams: (state: createdDreamsState, action: PayloadAction<Dream[]>) => {
      state.storage = action.payload;
    },
    setStatus: (
      state: createdDreamsState,
      action: PayloadAction<'idle' | 'loading' | 'failed'>,
    ) => {
      state.statusLoading = action.payload;
    },
    setError: (state: createdDreamsState, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.statusLoading = 'failed';
    },
    resetState: () => {
      return initialState;
    },
  },
});

export default createdDreamsSlice.reducer;
export const {
  setDreams,
  setStatus,
  setError,
  resetState,
} = createdDreamsSlice.actions;

export const selectDreams = (state: RootState) => state.createdDreams.storage;
export const selectDreamsStatusLoading
= (state: RootState) => state.createdDreams.statusLoading;
export const selectDreamsError = (state: RootState) => state.createdDreams.error;
