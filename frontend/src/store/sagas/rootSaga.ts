import { all, call, spawn } from 'redux-saga/effects';
import { watchSaga } from './watchSaga';

export default function* rootSaga() {
  // eslint-disable-next-line no-console
  console.log('root saga');
  const sagas = [
    watchSaga,
  ];


  const retrySagas: Generator[] = yield sagas.map(saga => {
    return spawn(function* () {
      while (true) {
        try {
          yield call(saga);

          break;
        } catch (error) {
          console.error(error);
        }
      }
    });
  });

  yield all(retrySagas);
}
