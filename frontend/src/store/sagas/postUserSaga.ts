import { AxiosError } from 'axios';
import { put } from 'redux-saga/effects';
import { User } from '../../types/User';
import { setStatus } from '../features/user/userSlice';
import { postUser } from '../../api/user';

export function* postUserSaga(user: Omit<User, 'userId'>) {
  // eslint-disable-next-line no-console
  
  yield put(setStatus('loading'));
  
  try {
    console.log('postUserSaga');
    const response: User = yield postUser(user);

    // eslint-disable-next-line no-console
    console.log(response);

    yield put(setUser(response));
  } catch (error: unknown) {
    yield put(setError((error as AxiosError).message));
  } finally {
    yield put(setStatus('idle'));
  }
}


