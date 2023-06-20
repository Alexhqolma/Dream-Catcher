import { AxiosError } from 'axios';

import { call, put } from 'redux-saga/effects';
import {
  setError,
  setToken,
  setStatus,
  setName,
  resetError,
} from '../../features/user/userSlice';
import { login } from '../../../api/Node/users';
import { UserLogin } from '../../../types/User';
import { SagaActions } from '../actions';

interface Props {
  type: SagaActions;
  payload: UserLogin;
}

export function* loginUserSaga({ payload }: Props): Generator {
  console.log('loginUserSaga', payload);

  yield put(setStatus('loading'));
  
  try {
    const response = yield call(login, payload);

    console.log('loginUserSaga response', response);

    if (!response.success) {
      throw response;
    }

    const { token, name } = response;

    yield put(setToken(token));
    yield put(setName(name));
    yield put(resetError());

  } catch (error: unknown) {
    console.log('catch', error);
    yield put(setError((error as AxiosError).message));
  } finally {
    yield put(setStatus('idle'));
  }
}


