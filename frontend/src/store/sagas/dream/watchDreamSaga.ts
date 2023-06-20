import { takeEvery } from 'redux-saga/effects';
import { SagaActions } from '../actions';
import { getAllDreamsSaga } from './getAllDreamsSaga';

export function* watchDreamSaga() {
  yield takeEvery(SagaActions.FETCH_ALL_DREAMS, getAllDreamsSaga);
  // yield takeEvery(sagaActions.LOGIN_USER, loginUserSaga);
  // yield takeEvery(sagaActions.FETCH_USER, getUserSaga);
}
