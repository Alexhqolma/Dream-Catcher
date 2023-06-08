import { AxiosError } from 'axios';
import { put } from 'redux-saga/effects';
import {
  setError,
  setMockUsers,
  setStatus,
} from '../features/mock/mockSlice';
import { getAllUsers } from '../../api/user';
import { User } from '../../types/User';

export function* getMockUsersSaga() {
  // eslint-disable-next-line no-console
  
  yield put(setStatus('loading'));
  
  try {
    console.log('getUsersSaga');
    const response: User[] = yield getAllUsers();

    // eslint-disable-next-line no-console
    console.log(response);

    yield put(setMockUsers(response));
  } catch (error: unknown) {
    yield put(setError((error as AxiosError).message));
  } finally {
    yield put(setStatus('idle'));
  }
}


