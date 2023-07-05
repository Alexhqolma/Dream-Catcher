import {
  createSlice,
} from '@reduxjs/toolkit';
import { BREAKPOINT } from '../../../constants/breakpoints';
import { RootState } from '../..';
import { SCREEN } from '../../../types/Screen';

export interface ControlState {
  screen: SCREEN,

  popup: {
    // like this
    // showPopup1: boolean;
    // showPopup2: boolean;
  },
}

const initialState: ControlState = {
  screen: SCREEN.W_320,
  popup: {
  },
};

const controlSlice = createSlice({
  name: 'controls',
  initialState,
  reducers: {
    setScreen: (state: ControlState) => {
      switch (true) {
        case window.innerWidth < BREAKPOINT.W_576.size: 
          state.screen = BREAKPOINT.W_320.name;
          break;
    
        case window.innerWidth < BREAKPOINT.W_768.size: 
          state.screen = BREAKPOINT.W_576.name;
          break;
        
        case window.innerWidth < BREAKPOINT.W_992.size: 
          state.screen = BREAKPOINT.W_768.name;
          break;

        case window.innerWidth < BREAKPOINT.W_1200.size: 
          state.screen = BREAKPOINT.W_992.name;
          break;

        case window.innerWidth < BREAKPOINT.W_1400.size: 
          state.screen = BREAKPOINT.W_1200.name;
          break;
    
        default:
          state.screen = BREAKPOINT.W_320.name;
      }
    },
    resetState: () => {
      return initialState;
    },
  },
});

export default controlSlice.reducer;
export const {
  setScreen,
  resetState,
} = controlSlice.actions;

export const selectScreen = (state: RootState) => state.control.screen;
