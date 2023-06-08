import { AxiosError } from 'axios';
import { put } from 'redux-saga/effects';
import { User } from '../../types/User';

export function* postUserSaga() {
  // eslint-disable-next-line no-console
  
  yield post(setStatus('loading'));
  
  try {
    console.log('postUserSaga');
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


