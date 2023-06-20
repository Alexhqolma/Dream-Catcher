import { ActionChannelEffect, actionChannel, call, take, takeEvery } from 'redux-saga/effects';
import { sagaActions } from './actions';
import { getDreamsSaga } from './user/registrationSaga';
import { getMockDataSaga } from './mock/getMockDataSaga';

export function* watchSaga() {
  console.log('watchSaga');

  yield getMockDataSaga();
  // yield getJavaData();

  const channel: ActionChannelEffect  = yield actionChannel(sagaActions.REGISTER_USER);

  while (true) {
    yield take(channel);

    console.log('pause');

    yield call(getDreamsSaga);
  }


  // yield takeEvery(loadUser, getMockUsersSaga);

  // yield takeEvery(sagaActions.REGISTER_USER, registrationSaga);

  // while (true) {
  //   const action = yield take(sagaActions.REGISTER_USER)

  //   console.log('action', action);
  //   yield fork(registrationSaga, action)
  // }

  yield null;
}
