import { takeEvery } from 'redux-saga/effects';
import { getDreamsSaga } from './getDreamsSaga';
import { getUserSaga } from './getUserSaga';
import { sagaActions } from './sagaActions';

export function* watchSaga() {
  // eslint-disable-next-line no-console
  console.log('watchSaga');

  yield getDreamsSaga();

  yield takeEvery(sagaActions.FETCH_USER, getUserSaga);
}
