import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../..';
import { Dream } from '../../../types/Dream';
import { RequestStatus } from '../../../types/RequestStatus';

export interface DreamState {
  storage: Dream | null;
  input: Omit<Dream, 'user' | 'handler'>;

  message: string | null;
  statusLoading: RequestStatus;
  error: string | null;
}

const initialState: DreamState = {
  storage: null,
  input: { title: '', body: '', imageUrl: '' } || null,

  message: null,
  statusLoading: RequestStatus.IDLE,
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
    resetDream: (state: DreamState) => {
      state.storage = initialState.storage;
    },
    setMessage: (
      state: DreamState,
      action: PayloadAction<string>,
    ) => {
      state.message = action.payload;
    },
    resetMessage: (state: DreamState) => {
      state.message = initialState.message;
    },
    setStatus: (
      state: DreamState,
      action: PayloadAction<RequestStatus>,
    ) => {
      state.statusLoading = action.payload;
    },
    setError: (state: DreamState, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.statusLoading = RequestStatus.FAILED;
    },
    resetError: (state: DreamState) => {
      state.error = initialState.error;
    },
    resetState: () => {
      return initialState;
    },
  },
});

export default dreamSlice.reducer;
export const {
  setDream,
  resetDream,
  setMessage,
  resetMessage,
  setError,
  resetError,
  setStatus,
  resetState,
} = dreamSlice.actions;

export const selectDream = (state: RootState) => state.dream.storage;
export const selectDreamStatusLoading
= (state: RootState) => state.dream.statusLoading;
export const selectDreamMessage = (state: RootState) => state.dream.message;
export const selectDreamError = (state: RootState) => state.dream.error;
