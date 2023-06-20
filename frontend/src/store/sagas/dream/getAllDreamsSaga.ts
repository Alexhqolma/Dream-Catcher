import axios, { AxiosError } from 'axios';

import { call, put } from 'redux-saga/effects';
import {
  setDreams,
  setError,
  setStatus,
} from '../../features/allDreams/allDreamsSlice';
import { getDreams } from '../../../api/Node/dreams';

export function* getAllDreamsSaga(): Generator {
  console.log('getAllDreamsSaga');

  yield put(setStatus('loading'));
  
  try {
    const response = yield call(getDreams);

    console.log('getAllDreamsSaga response', response);

    if (!response.success) {
      throw response;
    }

    yield put(setDreams(response.dreams));
  } catch (error: unknown) {
    console.log('catch getAllDreamsSaga', error);

    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }


    yield put(setError((error as AxiosError).message));
  } finally {
    yield put(setStatus('idle'));
  }
}


