import { AxiosError } from 'axios';

import { call, delay, put } from 'redux-saga/effects';
import { dreamAPI } from '../../../../api/Node/dreams';
import { RequestGetDream, ResponseGetDream, ResponseGetDreamWithError } from '../../../../types/Dream';
import { RequestStatus } from '../../../../types/RequestStatus';
import { Error } from '../../../../types/Error';
import { setDream, setError, setStatus, resetError, resetDream, resetMessage } from '../../../features/dream/dreamSlice';
import { setMessage } from '../../../features/user/userSlice';
interface Props {
  type: string;
  payload: RequestGetDream;
}

export function* getDreamSaga({ payload }: Props): Generator<unknown, any, ResponseGetDream> {
  console.log('getDreamSaga', payload);

  yield put(resetDream());
  yield put(resetMessage());
  yield put(resetError());
  yield put(setStatus(RequestStatus.LOADING));
  yield delay(2000);
  
  try {
    const response = yield call(dreamAPI.get, payload);

    console.log('getDreamSaga response', response);

    if (!response.success) {
      throw response;
    }

    yield put(setDream(response.dreams[0]));
    yield put(setMessage(response.message));
  } catch (error: unknown) {
    console.log('catch getDreamSaga', (error as AxiosError<ResponseGetDreamWithError>).response?.data?.message);

    yield put(setError(
      (error as AxiosError<ResponseGetDreamWithError>).response?.data?.message ||
      (error as AxiosError)?.message ||
      Error.UNEXPECTED_ERROR));
  } finally {
    yield put(setStatus(RequestStatus.IDLE));
  }
}
