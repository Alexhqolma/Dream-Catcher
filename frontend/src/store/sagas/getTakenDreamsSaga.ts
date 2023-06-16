import { AxiosError } from 'axios';
import { put } from 'redux-saga/effects';
import { setDreams, setError, setStatus } from '../features/takenDreams/takenDreamsSlice';
import { Dream } from '../../types/Dream';
import { getTakenDreams } from '../../api/dreams';

export function* getTakenDreamsSaga(userId: string) {
  yield put(setStatus('loading'));
  
  try {
    const response: Dream[] = yield getTakenDreams(userId);

    console.warn('getTakenDreams', userId, response);

    yield put(setDreams(response));
  } catch (error: unknown) {
    yield put(setError((error as AxiosError).message));
  } finally {
    yield put(setStatus('idle'));
  }
}
