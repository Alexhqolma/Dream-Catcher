import { takeEvery } from 'redux-saga/effects';
import { SagaActions } from '../actions';
import { registrationSaga } from './registration.saga';
import { getUserSaga } from './getUser.saga';
import { loginUserSaga } from './loginUser.saga';

export function* watchUserSaga() {
  yield takeEvery(SagaActions.REGISTER_USER, registrationSaga);
  yield takeEvery(SagaActions.LOGIN_USER, loginUserSaga);
  yield takeEvery(SagaActions.FETCH_USER, getUserSaga);
}
