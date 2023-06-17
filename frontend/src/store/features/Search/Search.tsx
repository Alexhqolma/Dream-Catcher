import {
  createSlice,
} from '@reduxjs/toolkit';

interface CounterState {
  value: string;
}

const initialState: CounterState = {
  value: ''
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.value = `search?q=${action.payload}`;
    }
  },
});

export default searchSlice.reducer;
export const {
  setQuery,
} = searchSlice.actions;
