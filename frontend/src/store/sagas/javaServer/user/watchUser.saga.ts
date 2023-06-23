import { takeEvery } from 'redux-saga/effects';
import { SagaActions } from '../../actions';
import { registrationSaga } from './registration.saga';
import { loginUserSaga } from './loginUser.saga';
import { getUserSaga } from './getUser.saga';
import { deleteUserSaga } from './deleteUser.saga';

export function* watchUserSaga() {
  yield takeEvery(SagaActions.REGISTER_USER_JAVA, registrationSaga);
  yield takeEvery(SagaActions.LOGIN_USER_JAVA, loginUserSaga);
  yield takeEvery(SagaActions.FETCH_USER_JAVA, getUserSaga);
  yield takeEvery(SagaActions.DELETE_USER_JAVA, deleteUserSaga);
}
