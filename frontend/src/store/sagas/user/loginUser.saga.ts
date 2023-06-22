import { ResponseLoginUser, ResponseLoginUserWithError } from '../../../api/Node/typesNodeServer';
import { AxiosError, AxiosResponse } from 'axios';

import {
  setError,
  setToken,
  setStatus,
  resetError,
  setFullName,
  login,
  setUserId,
} from '../../features/user/userSlice';
import { authAPI } from '../../../api/Node/users';
import { RequestLoginUser } from '../../../api/Node/typesNodeServer';
import { SagaActions } from '../actions';
import { call, put } from 'redux-saga/effects';
import { Error } from '../../../types/Error';
import { RequestStatus } from '../../../types/RequestStatus';

interface Props {
  type: SagaActions;
  payload: RequestLoginUser;
}

export function* loginUserSaga({ payload }: Props): Generator<unknown, any, ResponseLoginUser> {
  console.log('loginUserSaga', payload);

  yield put(setStatus(RequestStatus.LOADING));
  
  try {
    const response = yield call(authAPI.login, payload);

    console.log('loginUserSaga response', response as AxiosResponse<ResponseLoginUser, unknown> | unknown);

    const {
      token,
      fullName,
      // email,
      _id: userId,
    } = response;

    yield put(setToken(token));
    yield put(setFullName(fullName));
    yield put(setUserId(userId));
    yield put(resetError());
    yield put(login());

  } catch (error: unknown) {
    console.error('catch loginUserSaga', error);

    yield put(setError(
      (error as AxiosError<ResponseLoginUserWithError>).response?.data?.message ||
      (error as AxiosError)?.message ||
      Error.UNEXPECTED_ERROR));
  } finally {
    yield put(setStatus(RequestStatus.IDLE));
  }
}


