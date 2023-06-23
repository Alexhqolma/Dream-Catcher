import { AxiosError } from 'axios';

import { call, put } from 'redux-saga/effects';
import { setDreams, setError, setStatus } from '../../../features/allDreams/allDreamsSlice';
import { dreamAPI } from '../../../../api/Node/dreams';
import { ResponseGetDream, ResponseGetDreamWithError } from '../../../../types/Dream';
import { RequestStatus } from '../../../../types/RequestStatus';
import { Error } from '../../../../types/Error';


export function* getAllDreamsSaga(): Generator<unknown, any, ResponseGetDream> {
  console.log('getAllDreamsSaga');

  yield put(setStatus(RequestStatus.LOADING));
  
  try {
    const response = yield call(dreamAPI.get, { dreamId: '' });

    console.log('getAllDreamsSaga response', response);

    if (!response.success) {
      throw response;
    }

    yield put(setDreams(response.dreams));
  } catch (error: unknown) {
    console.log('catch getAllDreamsSaga', error);

    yield put(setError(
      (error as AxiosError<ResponseGetDreamWithError>).response?.data?.message ||
      (error as AxiosError)?.message ||
      Error.UNEXPECTED_ERROR));
  } finally {
    yield put(setStatus(RequestStatus.IDLE));
  }
}
