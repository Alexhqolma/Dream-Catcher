import { getWishesSaga } from './getWishesSaga';

export function* watchSaga() {
  // eslint-disable-next-line no-console
  console.log('watchSaga');

  yield getWishesSaga();
}
