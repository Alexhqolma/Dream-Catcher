import { AxiosError } from 'axios';
import { put } from 'redux-saga/effects';
import { User } from '../../../types/User';
import { setError, setMockPhotos, setStatus } from '../features/mock/mockSlice';
import { getPhotos } from '../../api/mockPhoto';

export function* getMockPhotoSaga() {
  // eslint-disable-next-line no-console
  
  yield put(setStatus('loading'));
  
  try {
    console.log('getMockPhotoSaga');
    const response: User[] = yield getPhotos();

    // eslint-disable-next-line no-console
    console.log(response);

    yield put(setMockPhotos(response));
  } catch (error: unknown) {
    yield put(setError((error as AxiosError).message));
  } finally {
    yield put(setStatus('idle'));
  }
}
