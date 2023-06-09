import { takeEvery } from 'redux-saga/effects';
import { getMockUsersSaga } from './getMockUsersSaga';
import { sagaActions } from './sagaActions';
import { getMockDreamsSaga } from './getMockDreamsSaga';
import { postUserSaga } from './postUserSaga';

export function* watchSaga() {
  // eslint-disable-next-line no-console
  console.log('watchSaga');


  yield getMockUsersSaga();
  yield getMockDreamsSaga();

  yield takeEvery(sagaActions.FETCH_USER, getMockUsersSaga);
  yield takeEvery(sagaActions.POST_USER, postUserSaga);
}
