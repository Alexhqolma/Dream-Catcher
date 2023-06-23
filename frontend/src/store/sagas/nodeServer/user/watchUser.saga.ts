import { takeEvery } from 'redux-saga/effects';
import { SagaActions } from '../../actions';
import { registrationSaga } from './registration.saga';
import { getUserSaga } from './getUser.saga';
import { loginUserSaga } from './loginUser.saga';
import { deleteUserSaga } from './deleteUser.saga';

export function* watchUserSaga() {
  yield takeEvery(SagaActions.REGISTER_USER_NODE, registrationSaga);
  yield takeEvery(SagaActions.LOGIN_USER_NODE, loginUserSaga);
  yield takeEvery(SagaActions.FETCH_USER_NODE, getUserSaga);
  yield takeEvery(SagaActions.DELETE_USER_NODE, deleteUserSaga);
}
