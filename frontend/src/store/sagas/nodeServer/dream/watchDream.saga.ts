import { takeEvery } from 'redux-saga/effects';
import { getAllDreamsSaga } from './getAllDreams.saga';
import { SagaActions } from '../../actions';

export function* watchDreamSaga() {
  yield takeEvery(SagaActions.FETCH_ALL_DREAMS, getAllDreamsSaga);
}
