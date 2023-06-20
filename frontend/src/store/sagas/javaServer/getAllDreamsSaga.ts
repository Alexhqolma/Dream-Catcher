import { AxiosError } from 'axios';
import { put } from 'redux-saga/effects';
import { setDreams, setError, setStatus } from '../../features/allDreams/allDreamsSlice';
import { getAllDreams } from '../../../api/Java/dreamsJava';
import { Dream } from '../../../types/Dream';

export function* getAllDreamsSaga() {
  yield put(setStatus('loading'));
  
  // try {
  //   const response: Dream[] = yield getAllDreams();

  //   console.warn('getAllDreams', response.dreams);

  //   yield put(setDreams(response.dreams));
  // } catch (error: unknown) {
  //   yield put(setError((error as AxiosError).message));
  // } finally {
  //   yield put(setStatus('idle'));
  // }
}
