import { AxiosError } from 'axios';
import { put } from 'redux-saga/effects';
import { setDreams, setError, setStatus } from '../../features/createdDreams/createdDreamsSlice';
import { Dream } from '../../../types/Dream';
import { getCreatedDreams } from '../../../api/Java/dreamsJava';

export function* getCreatedDreamsSaga(userId: string) {
  yield put(setStatus('loading'));
  
  try {
    const response: Dream[] = yield getCreatedDreams(userId);

    console.warn('getCreatedDreams', userId, response);

    yield put(setDreams(response));
  } catch (error: unknown) {
    yield put(setError((error as AxiosError).message));
  } finally {
    yield put(setStatus('idle'));
  }
}
