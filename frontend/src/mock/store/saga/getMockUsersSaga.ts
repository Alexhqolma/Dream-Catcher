import { AxiosError } from 'axios';
import { put } from 'redux-saga/effects';
import { MockUser } from '../../../types/User';
import { getAllUsers } from '../../api/mockUser';
import { setError, setMockUsers, setStatus } from '../features/mock/mockSlice';

export function* getMockUsersSaga() {
  // eslint-disable-next-line no-console
  
  yield put(setStatus('loading'));
  
  try {
    const response: MockUser[] = yield getAllUsers();

    yield put(setMockUsers(response));
  } catch (error: unknown) {
    yield put(setError((error as AxiosError).message));
  } finally {
    yield put(setStatus('idle'));
  }
}
