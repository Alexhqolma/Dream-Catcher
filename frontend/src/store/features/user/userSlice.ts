import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../..';
import { RequestStatus } from '../../../types/RequestStatus';

export interface UserState {
  storage: { userId: string } |null;

  isAuth: boolean;
  fullName: string | null;
  token: string | null;

  responseMessage: string | null;
  isResponseSuccess: boolean;

  statusLoading: RequestStatus;
  error: string | null;
}

const initialState: UserState = {
  storage: null,

  isAuth: false,
  fullName: null,
  token: null,

  responseMessage: null,
  isResponseSuccess: false,

  statusLoading: RequestStatus.IDLE,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state: UserState) => {
      state.isAuth = true;
    },
    logout: () => {
      return initialState;
    },
    setToken: (state: UserState, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    resetToken: (state: UserState) => {
      state.token = initialState.token;
    },
    setFullName: (state: UserState, action: PayloadAction<string>) => {
      state.fullName = action.payload;
    },
    setUserId: (state: UserState, action: PayloadAction<string>) => {
      state.storage = { ...state.storage, userId: action.payload };
    },
    setRegistrationSuccess: (state: UserState, action: PayloadAction<boolean>) => {
      state.isResponseSuccess = action.payload;
    },
    setMessage: (state: UserState, action: PayloadAction<string>) => {
      state.responseMessage = action.payload;
    },
    resetRegistrationSuccess: (state: UserState) => {
      state.isResponseSuccess = initialState.isResponseSuccess;
    },
    resetMessage: (state: UserState) => {
      state.responseMessage = initialState.responseMessage;
    },
    setStatus: (
      state: UserState,
      action: PayloadAction<RequestStatus>,
    ) => {
      state.statusLoading = action.payload;
    },
    setError: (state: UserState, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.statusLoading = RequestStatus.FAILED;
    },
    resetError: (state: UserState) => {
      state.error = null;
      state.statusLoading = RequestStatus.IDLE;
    },
    resetState: () => {
      return initialState;
    },
  },
});

export default userSlice.reducer;
export const {
  login,
  logout,
  setToken,
  setFullName,
  setStatus,
  setError,
  setUserId,
  setRegistrationSuccess,
  setMessage,
  resetRegistrationSuccess,
  resetMessage,
  resetError,
  resetToken,
  resetState,
} = userSlice.actions;

export const selectIsAuth = (state: RootState) => state.user.isAuth;
export const selectUser = (state: RootState) => state.user.storage;
export const selectToken = (state: RootState) => state.user.token;
export const selectFullName = (state: RootState) => state.user.fullName;

export const selectMessage = (state: RootState) => state.user.responseMessage;
export const selectRegistrationSuccess = (state: RootState) => state.user.isResponseSuccess;

export const selectUserStatusLoading
= (state: RootState) => state.user.statusLoading;
export const selectUserError = (state: RootState) => state.user.error;
