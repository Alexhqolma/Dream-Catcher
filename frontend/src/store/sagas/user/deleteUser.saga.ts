import { AxiosError } from 'axios';
import { call, put } from 'redux-saga/effects';
import {
  setError,
  setStatus,
  resetError,
  setMessage,
  setRegistrationSuccess,
  resetToken,
} from '../../features/user/userSlice';
import { authAPI } from '../../../api/Node/users';

import { SagaActions } from '../actions';
import { RequestStatus } from '../../../types/RequestStatus';
import { Error } from '../../../types/Error';
import { ResponseDeleteUser, ResponseGetUserWithError } from '../../../types/User';

interface Props {
  type: SagaActions;
  payload: string;
}

export function* deleteUserSaga({ payload }: Props): Generator<unknown, any, ResponseDeleteUser> {
  console.log('deleteUserSaga', payload);

  yield put(setStatus(RequestStatus.LOADING));
  
  try {
    const response = yield call(authAPI.getUser, payload);
    const { success, message } = response;

    if (!success) {
      throw response;
    }

    console.log('deleteUserSaga response', response);

    yield put(setMessage(message));
    yield put(setRegistrationSuccess(success));
    yield put(resetToken());
    yield put(resetError());
  } catch (error: unknown) {
    console.error('catch deleteUserSaga', error);

    yield put(setError(
      (error as AxiosError<ResponseGetUserWithError>).response?.data?.message ||
      (error as AxiosError)?.message ||
      Error.UNEXPECTED_ERROR));

  } finally {
    yield put(setStatus(RequestStatus.IDLE));
  }
}


