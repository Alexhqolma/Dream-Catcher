import { takeEvery } from 'redux-saga/effects';
import { sagaActions } from './sagaActions';
import { getMockDreamsSaga } from '../../mock/store/saga/getMockDreamsSaga';
import { postUserSaga } from './postUserSaga';
import { getMockUsersSaga } from '../../mock/store/saga/getMockUsersSaga';
import { getMockPhotoSaga } from '../../mock/store/saga/getMockPhotoSaga';

export function* watchSaga() {
  // eslint-disable-next-line no-console
  console.log('watchSaga');

  yield getMockUsersSaga();
  yield getMockDreamsSaga();
  yield getMockPhotoSaga();

  yield takeEvery(sagaActions.FETCH_USER, getMockUsersSaga);
  yield takeEvery(sagaActions.POST_USER, postUserSaga);
}
