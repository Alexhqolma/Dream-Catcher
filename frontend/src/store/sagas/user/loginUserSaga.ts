import { ResponseLoginUser } from './../../../api/Node/users';
import { AxiosError, AxiosResponse } from 'axios';

import { call, put } from 'redux-saga/effects';
import {
  setError,
  setToken,
  setStatus,
  resetError,
  setFullName,
  login,
  setUserId,
} from '../../features/user/userSlice';
import { RequestLoginUser, authAPI } from '../../../api/Node/users';
import { SagaActions } from '../actions';

interface Props {
  type: SagaActions;
  payload: RequestLoginUser;
}

export function* loginUserSaga({ payload }: Props): Generator {
  console.log('loginUserSaga', payload);

  yield put(setStatus('loading'));
  
  try {
    const response: AxiosResponse<ResponseLoginUser, any> | unknown = yield call(authAPI.login, payload);

    console.log('loginUserSaga response', response as AxiosResponse<ResponseLoginUser, any> | unknown);

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
    console.log('catch', error);
    yield put(setError((error as AxiosError).message));
  } finally {
    yield put(setStatus('idle'));
  }
}


