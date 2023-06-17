import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../..';
import { Dream } from '../../../types/Dream';

export interface EditDreamState {
  storage: Dream | null;
  statusLoading: 'idle' | 'loading' | 'failed';
  error: string | null;
}

const initialState: EditDreamState = {
  storage: null,
  statusLoading: 'idle',
  error: null,
};

const editDreamSlice = createSlice({
  name: 'editDream',
  initialState,
  reducers: {
    setDream: (state: EditDreamState, action: PayloadAction<Dream>) => {
      state.storage = action.payload;
    },
    setStatus: (
      state: EditDreamState,
      action: PayloadAction<'idle' | 'loading' | 'failed'>,
    ) => {
      state.statusLoading = action.payload;
    },
    setError: (state: EditDreamState, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.statusLoading = 'failed';
    },
    resetState: () => {
      return initialState;
    },
  },
});

export default editDreamSlice.reducer;
export const {
  setDream,
  setError,
  setStatus,
  resetState,
} = editDreamSlice.actions;

export const selectEditDream = (state: RootState) => state.editDream.storage;
export const selectEditDreamStatusLoading
= (state: RootState) => state.editDream.statusLoading;
export const selectEditDreamError = (state: RootState) => state.editDream.error;
