import { getAllDreams } from './../../../../mock/api/mockDreams';
import { AxiosError } from 'axios';

import { call, put } from 'redux-saga/effects';
import { setDreams, setError, setStatus } from '../../../features/allDreams/allDreamsSlice';
import { dreamAPI } from '../../../../api/Node/dreams';
import { RequestPatchDream, ResponsePatchDream, ResponsePatchDreamWithError } from '../../../../types/Dream';
import { RequestStatus } from '../../../../types/RequestStatus';
import { Error } from '../../../../types/Error';
import { getAllDreamsSaga } from './getAllDreams.saga';
interface Props {
  type: string;
  payload: RequestPatchDream;
}

export function* updateDreamSaga({ payload }: Props): Generator<unknown, any, ResponsePatchDream> {
  console.log('updateDreamSaga', payload);

  yield put(setStatus(RequestStatus.LOADING));
  
  try {
    const response = yield call(dreamAPI.update, payload);

    console.log('updateDreamSaga response', response);

    if (!response.success) {
      throw response;
    }

    console.log(response);

    yield getAllDreamsSaga();
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
