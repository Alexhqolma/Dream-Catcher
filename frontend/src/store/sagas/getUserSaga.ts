import { AxiosError } from 'axios';

import { put } from 'redux-saga/effects';
import {
  setError,
  setUser,
  setStatus,
} from '../features/user/userSlice';
import { User } from '../../types/User';
import { getFirstUser } from '../../mock/api/mockUser';

export function* getUsersSaga() {
  yield put(setStatus('loading'));
  
  try {
    const response: User = yield getFirstUser();

    console.warn('test saga');

    yield put(setUser(response));
  } catch (error: unknown) {
    yield put(setError((error as AxiosError).message));
  } finally {
    yield put(setStatus('idle'));
  }
}


