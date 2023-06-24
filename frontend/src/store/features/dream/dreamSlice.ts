import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../..';
import { Dream } from '../../../types/Dream';

export interface DreamState {
  storage: Dream | null;
  input: Dream | null;
  statusLoading: 'idle' | 'loading' | 'failed';
  error: string | null;
}

const initialState: DreamState = {
  storage: null,
  input: null,
  statusLoading: 'idle',
  error: null,
};

const dreamSlice = createSlice({
  name: 'editDream',
  initialState,
  reducers: {
    setDream: (state: DreamState, action: PayloadAction<Dream>) => {
      console.log('setDream');

      state.storage = action.payload;
    },
    setStatus: (
      state: DreamState,
      action: PayloadAction<'idle' | 'loading' | 'failed'>,
    ) => {
      state.statusLoading = action.payload;
    },
    setError: (state: DreamState, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.statusLoading = 'failed';
    },
    resetState: () => {
      return initialState;
    },
  },
});

export default dreamSlice.reducer;
export const {
  setDream,
  setError,
  setStatus,
  resetState,
} = dreamSlice.actions;

export const selectDream = (state: RootState) => state.dream.storage;
export const selectDreamStatusLoading
= (state: RootState) => state.dream.statusLoading;
export const selectDreamError = (state: RootState) => state.dream.error;
