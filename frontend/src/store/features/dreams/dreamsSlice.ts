import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../..';
import { Dream } from '../../../types/Dream';

export interface DreamsState {
  storage: Dream[];
  statusLoading: 'idle' | 'loading' | 'failed';
  error: string | null;
}

const initialState: DreamsState = {
  storage: [],
  statusLoading: 'idle',
  error: null,
};

const dreamsSlice = createSlice({
  name: 'dreams',
  initialState,
  reducers: {
    setDreams: (state: DreamsState, action: PayloadAction<Dream[]>) => {
      state.storage = action.payload;
    },
    setStatus: (
      state: DreamsState,
      action: PayloadAction<'idle' | 'loading' | 'failed'>,
    ) => {
      state.statusLoading = action.payload;
    },
    setError: (state: DreamsState, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.statusLoading = 'failed';
    },
    resetState: () => {
      return initialState;
    },
  },
});

export default dreamsSlice.reducer;
export const {
  setDreams,
  setStatus,
  setError,
  resetState,
} = dreamsSlice.actions;

export const selectDreams = (state: RootState) => state.dreams.storage;
export const selectDreamsStatusLoading
= (state: RootState) => state.dreams.statusLoading;
export const selectDreamsError = (state: RootState) => state.dreams.error;
