import { AxiosError } from 'axios';

import { call, put } from 'redux-saga/effects';
import { setDreams, setError, setStatus } from '../../../features/allDreams/allDreamsSlice';
import { dreamAPI } from '../../../../api/Node/dreams';
import { RequestCreateDream, ResponseCreateDream, ResponseCreateDreamWithError } from '../../../../types/Dream';
import { RequestStatus } from '../../../../types/RequestStatus';
import { Error } from '../../../../types/Error';
interface Props {
  type: string;
  payload: RequestCreateDream;
}

export function* createDreamSaga({ payload }: Props): Generator<unknown, any, ResponseCreateDream> {
  console.log('createDreamSaga', payload);

  yield put(setStatus(RequestStatus.LOADING));
  
  try {
    const response = yield call(dreamAPI.create, payload);

    console.log('createDreamSaga response', response);

    if (!response.success) {
      throw response;
    }

    console.log(response);

    // yield put(setDreams(response.dream));
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
