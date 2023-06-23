import { takeEvery } from 'redux-saga/effects';
import { getAllDreamsSaga } from './getAllDreams.saga';
import { SagaActions } from '../../actions';
import { createDreamSaga } from './createDream.saga';

export function* watchDreamSaga() {
  yield takeEvery(SagaActions.FETCH_ALL_DREAMS, getAllDreamsSaga);
  yield takeEvery(SagaActions.CREATE_DREAM, createDreamSaga);
}
