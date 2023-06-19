// import { fork, take, takeEvery } from 'redux-saga/effects';
// import { getMockDreamsSaga } from '../../mock/store/saga/getMockDreamsSaga';
// import { getMockUsersSaga } from '../../mock/store/saga/getMockUsersSaga';
// import { getMockPhotoSaga } from '../../mock/store/saga/getMockPhotoSaga';
import { getAllDreamsSaga } from './getAllDreamsSaga';
import { getCreatedDreamsSaga } from './getCreatedDreamsSaga';
import { getTakenDreamsSaga } from './getTakenDreamsSaga';
import { postCreateDreamSaga } from './postCreateDreamSaga';
// import { registrationSaga } from './user/registrationSaga';
// import { sagaActions } from './actions';

export function* watchSaga() {
  console.log('watchSaga');

  // yield getMockUsersSaga();
  // yield getMockDreamsSaga();
  // yield getMockPhotoSaga();


  // get data from java server
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

  // yield takeEvery(loadUser, getMockUsersSaga);
  // yield takeEvery(sagaActions.REGISTER_USER, registrationSaga);

  // while (true) {
  //   const action = yield take(sagaActions.REGISTER_USER)

  //   console.log('action', action);
  //   yield fork(registrationSaga, action)
  // }
}
