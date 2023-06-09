import { AxiosError } from 'axios';
import { put } from 'redux-saga/effects';
import { User } from '../../types/User';
import { setError, setStatus, setUser } from '../features/user/userSlice';
// import { postUser } from '../../api/user';

export function* postUserSaga(action : {
    type: string;
    payload: Omit<User, 'userId'>
  }) {
  // eslint-disable-next-line no-console
  
  yield put(setStatus('loading'));
  
  try {
    console.log('postUserSaga', action.payload);
    // const response: User = yield postUser(user);

    // eslint-disable-next-line no-console
    // console.log(response);

    // yield put(setUser(response));

    yield put(setUser({
      ...action.payload,
      userId: 'random id',
    }));
  } catch (error: unknown) {
    yield put(setError((error as AxiosError).message));
  } finally {
    yield put(setStatus('idle'));
  }
}


