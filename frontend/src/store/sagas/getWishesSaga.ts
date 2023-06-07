import { AxiosError } from 'axios';
import { put, delay } from 'redux-saga/effects';
import { getAllWishes } from '../../api/wishes';
import { Wish } from '../../types/Wish';
import {
  setError,
  setWishes,
  setStatus,
} from '../features/Wishes/wishesSlice';

export function* getWishesSaga() {
  // eslint-disable-next-line no-console
  console.log('getWishesSaga');
  
  yield put(setStatus('loading'));

  try {
    yield delay(3000);
    const response: Wish[] = yield getAllWishes();

    // eslint-disable-next-line no-console
    console.log(response);

    yield put(setWishes(response));
  } catch (error: unknown) {
    yield put(setError((error as AxiosError).message));
  } finally {
    yield put(setStatus('idle'));
  }
}
