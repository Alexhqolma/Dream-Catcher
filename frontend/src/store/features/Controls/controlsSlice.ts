import {
  createSlice,
} from '@reduxjs/toolkit';

export interface ControlState {
  // I use this state to control global UI
  popup: {
    // like this
    // showPopup1: boolean;
    // showPopup2: boolean;
  },
}

const initialState: ControlState = {
  popup: {
  },
};

const controlSlice = createSlice({
  name: 'controls',
  initialState,
  reducers: {
    resetState: () => {
      return initialState;
    },
  },
});

export default controlSlice.reducer;
export const {
  resetState,
} = controlSlice.actions;
