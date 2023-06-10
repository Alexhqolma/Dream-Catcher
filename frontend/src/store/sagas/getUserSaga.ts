import { AxiosError } from 'axios';

import { put } from 'redux-saga/effects';
import {
  setError,
  setUser,
  setStatus,
} from '../features/user/userSlice';
import { getFirstUser } from '../../api/user';
import { User } from '../../types/User';

export function* getUsersSaga() {
  yield put(setStatus('loading'));
  
  try {
    const response: User = yield getFirstUser();

    yield put(setUser(response));
  } catch (error: unknown) {
    yield put(setError((error as AxiosError).message));
  } finally {
    yield put(setStatus('idle'));
  }
}


