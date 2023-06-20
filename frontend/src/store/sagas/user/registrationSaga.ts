import { AxiosError } from 'axios';

import { call, put } from 'redux-saga/effects';
import {
  setError,
  setToken,
  setStatus,
  resetError,
} from '../../features/user/userSlice';
import { register } from '../../../api/Node/users';
import { User } from '../../../types/User';

interface Props {
  type: string;
  payload: Omit<User, 'userId'>;
}

export function* registrationSaga({ payload }: Props): Generator {
  console.log('registrationSaga', payload);

  yield put(setStatus('loading'));
  
  try {
    const response = yield call(register, payload);
    console.log('register saga response', response);
    
    if (!response.success) {
      throw response;
    }
    
    const { token } = response;

    yield put(setToken(token));
    yield put(resetError());
  } catch (error: unknown) {
    console.error('catch registrationSaga', error.message);

    yield put(setError(error.message));
  } finally {
    yield put(setStatus('idle'));
  }
}


