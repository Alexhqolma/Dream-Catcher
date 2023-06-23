import { AxiosError } from 'axios';
import { call, put } from 'redux-saga/effects';
import {
  setError,
  setToken,
  setStatus,
  resetError,
  setFullName,
  setUserId,
  login,
} from '../../../features/user/userSlice';
import { authAPI } from '../../../../api/Node/users';

import { SagaActions } from '../../actions';
import { RequestStatus } from '../../../../types/RequestStatus';
import { Error } from '../../../../types/Error';
import { ResponseGetUser, ResponseGetUserWithError } from '../../../../types/User';

interface Props {
  type: SagaActions;
  payload: string;
}

export function* getUserSaga({ payload }: Props): Generator<unknown, any, ResponseGetUser> {
  console.log('getUserSaga', payload);

  yield put(setStatus(RequestStatus.LOADING));
  
  try {
    const response = yield call(authAPI.getUser, payload);
    const { success, token, fullName, userId } = response;

    if (!success) {
      throw response;
    }

    console.log('getUserSaga response', response);

    yield put(setToken(token));
    yield put(setFullName(fullName));
    yield put(setUserId(userId));
    yield put(resetError());
    yield put(login());
  } catch (error: unknown) {
    console.error('catch getUserSaga', error);

    yield put(setError(
      (error as AxiosError<ResponseGetUserWithError>).response?.data?.message ||
      (error as AxiosError)?.message ||
      Error.UNEXPECTED_ERROR));

  } finally {
    yield put(setStatus(RequestStatus.IDLE));
  }
}


