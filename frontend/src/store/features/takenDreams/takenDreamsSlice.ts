import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../..';
import { Dream } from '../../../types/Dream';

export interface takenDreamsState {
  storage: Dream[];
  statusLoading: 'idle' | 'loading' | 'failed';
  error: string | null;
}

const initialState: takenDreamsState = {
  storage: [],
  statusLoading: 'idle',
  error: null,
};

const takenDreamsSlice = createSlice({
  name: 'takenDreams',
  initialState,
  reducers: {
    setDreams: (state: takenDreamsState, action: PayloadAction<Dream[]>) => {
      state.storage = action.payload;
    },
    setStatus: (
      state: takenDreamsState,
      action: PayloadAction<'idle' | 'loading' | 'failed'>,
    ) => {
      state.statusLoading = action.payload;
    },
    setError: (state: takenDreamsState, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.statusLoading = 'failed';
    },
    resetState: () => {
      return initialState;
    },
  },
});

export default takenDreamsSlice.reducer;
export const {
  setDreams,
  setStatus,
  setError,
  resetState,
} = takenDreamsSlice.actions;

export const selectDreams = (state: RootState) => state.takenDreams.storage;
export const selectDreamsStatusLoading
= (state: RootState) => state.takenDreams.statusLoading;
export const selectDreamsError = (state: RootState) => state.takenDreams.error;
