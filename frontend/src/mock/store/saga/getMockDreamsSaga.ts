import { AxiosError } from 'axios';
import { put } from 'redux-saga/effects';

import {
  setError,
  setMockDreams,
  setStatus,
} from '../features/mock/mockSlice';
import { Dream } from '../../../types/Dream';
import { getAllDreams } from '../../../api/dreams';

export function* getMockDreamsSaga() {
  // eslint-disable-next-line no-console
  
  yield put(setStatus('loading'));
  
  try {
    console.log('getUsersSaga');
    const response: Dream[] = yield getAllDreams();

    // eslint-disable-next-line no-console
    console.log(response);

    yield put(setMockDreams(response));
  } catch (error: unknown) {
    yield put(setError((error as AxiosError).message));
  } finally {
    yield put(setStatus('idle'));
  }
}


