import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../..';
import { Wish } from '../../../types/Wish';

export interface WishesState {
  storage: Wish[];
  statusLoading: 'idle' | 'loading' | 'failed';
  error: string | null;
}

const initialState: WishesState = {
  storage: [],
  statusLoading: 'idle',
  error: null,
};

const wishesSlice = createSlice({
  name: 'wishes',
  initialState,
  reducers: {
    setWishes: (state: WishesState, action: PayloadAction<Wish[]>) => {
      state.storage = action.payload;
    },
    setStatus: (
      state: WishesState,
      action: PayloadAction<'idle' | 'loading' | 'failed'>,
    ) => {
      state.statusLoading = action.payload;
    },
    setError: (state: WishesState, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.statusLoading = 'failed';
    },
    resetState: () => {
      return initialState;
    },
  },
});

export default wishesSlice.reducer;
export const {
  setWishes,
  setStatus,
  setError,
  resetState,
} = wishesSlice.actions;

export const selectWishes = (state: RootState) => state.wishes.storage;
export const selectWishesStatusLoading
= (state: RootState) => state.wishes.statusLoading;
export const selectWishesError = (state: RootState) => state.wishes.error;
