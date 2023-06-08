import { AxiosError } from 'axios';
import { put, delay } from 'redux-saga/effects';
import {
  setError,
  setUser,
  setStatus,
} from '../features/user/userSlice';
import { getFirstUser } from '../../api/user';
import { User } from '../../types/User';

export function* getUserSaga() {
  // eslint-disable-next-line no-console
  
  yield put(setStatus('loading'));
  
  try {
    console.log('getUserSaga');
    const response: User = yield getFirstUser();

    // eslint-disable-next-line no-console
    console.log(response);

    yield put(setUser(response));
  } catch (error: unknown) {
    yield put(setError((error as AxiosError).message));
  } finally {
    yield put(setStatus('idle'));
  }
}


