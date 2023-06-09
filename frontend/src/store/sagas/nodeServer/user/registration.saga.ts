import { call, delay, put } from 'redux-saga/effects';
import { AxiosError } from 'axios';

import {
  setError,
  setStatus,
  resetError,
  setMessage,
  setRegistrationSuccess,
} from '../../../features/user/userSlice';
import { authAPI } from '../../../../api/Node/users';
import { Error } from '../../../../types/Error';
import { RequestStatus } from '../../../../types/RequestStatus';
import { RequestCreateUser, ResponseCreateUser, ResponseCreateUserWithError } from '../../../../types/User';

interface Props {
  type: string;
  payload: RequestCreateUser;
}

export function* registrationSaga({ payload }: Props): Generator<unknown, any, ResponseCreateUser> {
  console.log('registrationSaga', payload);

  yield put(resetError());
  yield put(setStatus(RequestStatus.LOADING));
  yield delay(1000);
  
  try {
    const response = yield call(authAPI.register, payload);
    console.log('register saga response', response);
    
    if (!response.success) {
      throw response;
    }
    
    const { message, success } = response;
    
    yield put(setMessage(message));
    yield put(setRegistrationSuccess(success));
  } catch (error) {
    console.error('catch registrationSaga', error);

    yield put(setError(
      (error as AxiosError<ResponseCreateUserWithError>).response?.data?.message ||
      (error as AxiosError)?.message ||
      Error.UNEXPECTED_ERROR));
  } finally {
    yield put(setStatus(RequestStatus.IDLE));
  }
}


