import { AxiosError } from 'axios';

import { call, put } from 'redux-saga/effects';
import {
  setError,
  setToken,
  setStatus,
  resetError,
} from '../../features/user/userSlice';
import { getUser } from '../../../api/Node/users';
import { SagaActions } from '../actions';

interface Props {
  type: SagaActions;
  payload: string;
}

export function* getUserSaga({ payload }: Props): Generator {
  console.log('getUserSaga', payload);

  yield put(setStatus('loading'));
  
  try {
    const response = yield call(getUser, payload);

    if (!response.success) {
      throw response;
    }

    console.log('register saga response', response);

    yield put(setToken(response.token));
    yield put(resetError());
  } catch (error: unknown) {
    console.log(error);
    yield put(setError((error as AxiosError).message));
  } finally {
    yield put(setStatus('idle'));
  }
}


