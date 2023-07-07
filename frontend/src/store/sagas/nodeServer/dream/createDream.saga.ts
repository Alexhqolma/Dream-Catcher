import { call, delay, put } from 'redux-saga/effects';
import { AxiosError } from 'axios';

import { dreamAPI } from '../../../../api/Node/dreams';
import { RequestCreateDream, ResponseCreateDream, ResponseCreateDreamWithError } from '../../../../types/Dream';
import { RequestStatus } from '../../../../types/RequestStatus';
import { Error } from '../../../../types/Error';
import { setError, setStatus, resetError, setDream, setMessage, resetDream, resetMessage } from '../../../features/dream/dreamSlice';
interface Props {
  type: string;
  payload: RequestCreateDream;
}

export function* createDreamSaga({ payload }: Props): Generator<unknown, any, ResponseCreateDream> {
  console.log('createDreamSaga', payload);

  yield put(resetDream());
  yield put(resetMessage());
  yield put(resetError());
  yield put(setStatus(RequestStatus.LOADING));
  yield delay(2000);
  
  try {
    const response = yield call(dreamAPI.create, payload);

    console.log('createDreamSaga response', response);

    if (!response.success) {
      throw response;
    }

    yield put(setDream(response.dream));
    yield put(setMessage(response.message));
  } catch (error: unknown) {
    console.log('catch createDreamSaga', (error as AxiosError<ResponseCreateDreamWithError>).response?.data?.message);

    yield put(setError(
      (error as AxiosError<ResponseCreateDreamWithError>).response?.data?.message ||
      (error as AxiosError)?.message ||
      Error.UNEXPECTED_ERROR));
  } finally {
    yield put(setStatus(RequestStatus.IDLE));
  }
}
