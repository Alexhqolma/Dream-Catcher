import { AxiosError } from 'axios';

import { call, put, select } from 'redux-saga/effects';
import {
  setDreams,
  setError,
  setStatus,
} from '../../features/allDreams/allDreamsSlice';
import { createDream } from '../../../api/Node/dreams';
import { Dream } from '../../../types/Dream';

interface Props {
  type: string;
  payload: Omit<Dream, 'id'>;
}

export function* createDreamSaga({ payload }): Generator<Props> {
  console.log('getAllDreamsSaga');
  const token = select(state => state.user.token);

  yield put(setStatus('loading'));
  
  try {
    const response = yield call(createDream(payload), token);

    console.log('createDreamSaga response', response);

    if (!response.success) {
      throw response;
    }

    yield put(setDreams(response.dreams));
  } catch (error: unknown) {
    console.log('catch getAllDreamsSaga', error);
    yield put(setError((error as AxiosError).message));
  } finally {
    yield put(setStatus('idle'));
  }
}


