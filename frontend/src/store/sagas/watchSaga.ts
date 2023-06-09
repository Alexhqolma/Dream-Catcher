import { takeEvery } from 'redux-saga/effects';
import { getMockUsersSaga } from './getMockUsersSaga';
import { sagaActions } from './sagaActions';
import { getMockDreamsSaga } from './getMockDreamsSaga';
import { postUserSaga } from './postUserSaga';
import { User } from '../../types/User';

export function* watchSaga(user: Omit<User, 'userId'>) {
  // eslint-disable-next-line no-console
  console.log('watchSaga');


  yield getMockUsersSaga();
  yield getMockDreamsSaga();

  yield takeEvery(sagaActions.FETCH_USER, getMockUsersSaga);
  yield takeEvery(sagaActions.POST_USER, postUserSaga, user);
}
