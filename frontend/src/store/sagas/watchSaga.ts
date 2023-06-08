import { getDreamsSaga } from './getDreamsSaga';

export function* watchSaga() {
  // eslint-disable-next-line no-console
  console.log('watchSaga');

  yield getDreamsSaga();
}
