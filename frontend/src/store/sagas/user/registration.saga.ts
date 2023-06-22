import { call, put } from 'redux-saga/effects';
import {
  setError,
  setToken,
  setStatus,
  resetError,
} from '../../features/user/userSlice';
import { ResponseCreateUser, ResponseCreateUserWithError, authAPI } from '../../../api/Node/users';
import { UserCreate } from '../../../types/User';
import { AxiosError } from 'axios';
import { Error } from '../../../types/Error';
import { RequestStatus } from '../../../types/RequestStatus';

interface Props {
  type: string;
  payload: UserCreate;
}

export function* registrationSaga({ payload }: Props): Generator<unknown, any, ResponseCreateUser> {
  console.log('registrationSaga', payload);

  yield put(setStatus(RequestStatus.LOADING));
  
  try {
    const response = yield call(authAPI.register, payload);
    console.log('register saga response', response);
    
    if (!response.success) {
      throw response;
    }
    
    const { token } = response;

    yield put(setToken(token));
    yield put(resetError());
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


