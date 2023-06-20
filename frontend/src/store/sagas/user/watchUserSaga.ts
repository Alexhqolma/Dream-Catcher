import { takeEvery } from 'redux-saga/effects';
import { SagaActions } from '../actions';
import { registrationSaga } from './registrationSaga';
import { getUserSaga } from './getUserSaga';
import { loginUserSaga } from './loginUserSaga';

export function* watchUserSaga() {
  yield takeEvery(SagaActions.REGISTER_USER, registrationSaga);
  yield takeEvery(SagaActions.LOGIN_USER, loginUserSaga);
  yield takeEvery(SagaActions.FETCH_USER, getUserSaga);
}
