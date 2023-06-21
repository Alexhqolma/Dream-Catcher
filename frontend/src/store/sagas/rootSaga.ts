import { all, call, spawn } from 'redux-saga/effects';
import { watchUserSaga } from './user/watchUserSaga';
import { watchDreamSaga } from './dream/watchDreamSaga';
import { getMockDataSaga } from './mock/getMockDataSaga';
import { getJavaData } from './javaServer/getDataFromJavaServerSaga';

export default function* rootSaga() {
  const sagas = [
    // getMockDataSaga,
    // getJavaData,
    watchUserSaga,
    watchDreamSaga,
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
