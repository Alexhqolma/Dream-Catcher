import { AxiosError } from 'axios';
import { put, delay } from 'redux-saga/effects';
import { getAllDreams } from '../../api/dreams';
import { Dream } from '../../types/Dream';
import {
  setError,
  setDreams,
  setStatus,
} from '../features/dreams/dreamsSlice';

export function* getDreamsSaga() {
  // eslint-disable-next-line no-console
  console.log('getDreamsSaga');
  
  yield put(setStatus('loading'));

  try {
    yield delay(3000);
    const response: Dream[] = yield getAllDreams();

    // eslint-disable-next-line no-console
    console.log(response);

    yield put(setDreams(response));
  } catch (error: unknown) {
    yield put(setError((error as AxiosError).message));
  } finally {
    yield put(setStatus('idle'));
  }
}
