import { AxiosError } from 'axios';

import { call, put } from 'redux-saga/effects';
import { setError, setStatus } from '../../../features/allDreams/allDreamsSlice';
import { dreamAPI } from '../../../../api/Node/dreams';
import { RequestGetDream, ResponseCreateDreamWithError, ResponseGetDream } from '../../../../types/Dream';
import { RequestStatus } from '../../../../types/RequestStatus';
import { Error } from '../../../../types/Error';
import { setDream } from '../../../features/dream/dreamSlice';
interface Props {
  type: string;
  payload: RequestGetDream;
}

export function* getDreamSaga({ payload }: Props): Generator<unknown, any, ResponseGetDream> {
  console.log('getDreamSaga', payload);

  yield put(setStatus(RequestStatus.LOADING));
  
  try {
    const response = yield call(dreamAPI.get, payload);

    console.log('getDreamSaga response', response);

    if (!response.success) {
      throw response;
    }

    yield put(setDream(response.dream));
  } catch (error: unknown) {
    console.log('catch getDreamSaga', (error as AxiosError<ResponseCreateDreamWithError>).response?.data?.message);

    yield put(setError(
      (error as AxiosError<ResponseCreateDreamWithError>).response?.data?.message ||
      (error as AxiosError)?.message ||
      Error.UNEXPECTED_ERROR));
  } finally {
    yield put(setStatus(RequestStatus.IDLE));
  }
}
