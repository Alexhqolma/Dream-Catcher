import { AxiosError } from 'axios';
import { put } from 'redux-saga/effects';
import { setDreams, setError, setStatus } from '../../features/allDreams/allDreamsSlice';
import { getSearchDreams } from '../../../api/Java/dreamsJava';
import { Dream } from '../../../types/Dream';

export function* getSearchDreamsSaga() {
  yield put(setStatus('loading'));
  
  try {
    const response: Dream[] = yield getSearchDreams(query);

    yield put(setDreams(response));
  } catch (error: unknown) {
    yield put(setError((error as AxiosError).message));
  } finally {
    yield put(setStatus('idle'));
  }
}
