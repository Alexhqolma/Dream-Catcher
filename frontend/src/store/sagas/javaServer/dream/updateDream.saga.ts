import { AxiosError } from 'axios';

import { call, delay, put } from 'redux-saga/effects';

import { dreamAPI } from '../../../../api/Node/dreams';
import { RequestPatchDream, ResponsePatchDream, ResponsePatchDreamWithError } from '../../../../types/Dream';
import { RequestStatus } from '../../../../types/RequestStatus';
import { Error } from '../../../../types/Error';
import { resetDream, resetError, resetMessage, setDream, setError, setMessage, setStatus } from '../../../features/dream/dreamSlice';
interface Props {
  type: string;
  payload: RequestPatchDream;
}

export function* updateDreamSaga({ payload }: Props): Generator<unknown, any, ResponsePatchDream> {
  console.log('updateDreamSaga', payload);
  
  yield put(resetDream());
  yield put(resetMessage());
  yield put(resetError());
  yield put(setStatus(RequestStatus.LOADING));
  yield delay(2000);
  
  try {
    const response = yield call(dreamAPI.update, payload);

    console.log('updateDreamSaga response', response);

    if (!response.success) {
      throw response;
    }

    console.log(response);

    yield put(setDream(response.dream));
    yield put(setMessage(response.message));
  } catch (error: unknown) {
    console.log('catch updateDreamSaga', (error as AxiosError<ResponsePatchDreamWithError>).response?.data?.message);

    yield put(setError(
      (error as AxiosError<ResponsePatchDreamWithError>).response?.data?.message ||
      (error as AxiosError)?.message ||
      Error.UNEXPECTED_ERROR));
  } finally {
    yield put(setStatus(RequestStatus.IDLE));
  }
}
