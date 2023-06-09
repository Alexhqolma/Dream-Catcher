import { AxiosError } from 'axios';
import { put } from 'redux-saga/effects';
import { Dream } from '../../../types/Dream';
import { createDream } from '../../../api/Java/dreamsJava';
import { setDream, setError, setStatus } from '../../features/dream/dreamSlice';

export function* postCreateDreamSaga(data: Omit<Dream, "id"> | FormData) {
  console.log('postCreateDreamSaga', data);

  yield put(setStatus('loading'));
  
  try {
    const response: Dream = yield createDream(data);

    console.warn('createDream', data, response);

    yield put(setDream(response));
  } catch (error: unknown) {
    yield put(setError((error as AxiosError).message));
  } finally {
    yield put(setStatus('idle'));
  }
}
