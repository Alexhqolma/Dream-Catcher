import { takeEvery } from 'redux-saga/effects';
import { sagaActions } from './sagaActions';
import { getMockDreamsSaga } from '../../mock/store/saga/getMockDreamsSaga';
import { postUserSaga } from './postUserSaga';
import { getMockUsersSaga } from '../../mock/store/saga/getMockUsersSaga';
import { getMockPhotoSaga } from '../../mock/store/saga/getMockPhotoSaga';
import { getAllDreamsSaga } from './getAllDreamsSaga';
import { getCreatedDreamsSaga } from './getCreatedDreamsSaga';
import { getTakenDreamsSaga } from './getTakenDreamsSaga';
import { postCreateDreamSaga } from './postCreateDreamSaga';

export function* watchSaga() {
  console.log('watchSaga');

  yield getMockUsersSaga();
  yield getMockDreamsSaga();
  yield getMockPhotoSaga();

  yield getAllDreamsSaga();
  yield getCreatedDreamsSaga('1');
  yield getTakenDreamsSaga('2');

  yield postCreateDreamSaga({
    title: 'string',
    body: 'string',
    userId: 'string',
    handler: null,
    status: false,
    messages: [],
    photo: null,
  });

  yield takeEvery(sagaActions.FETCH_USER, getMockUsersSaga);
  yield takeEvery(sagaActions.POST_USER, postUserSaga);
}
