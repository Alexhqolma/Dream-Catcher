import { AxiosError } from 'axios';

import { call, put } from 'redux-saga/effects';
import {
  setError,
  setUser,
  setStatus,
} from '../../features/user/userSlice';
import { register } from '../../../api/Node/users';

interface Props {
  payload: any;
}

export function* registrationSaga({ payload }: Props): Generator {
  console.log('registrationSaga', payload);

  yield put(setStatus('loading'));

  
  try {
    const response: {
      name: string,
      id: string,
      token: string,
    } = yield call(register, payload);

    console.log('register saga response', response);

    yield put(setUser(response));
  } catch (error: unknown) {
    console.log(error);
    yield put(setError((error as AxiosError).message));
  } finally {
    yield put(setStatus('idle'));
  }
}


