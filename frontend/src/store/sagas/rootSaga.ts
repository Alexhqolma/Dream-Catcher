import { all, call, spawn } from 'redux-saga/effects';
import { watchUserSaga } from './user/watchUser.saga';
import { watchDreamSaga } from './dream/watchDream.saga';
import { getMockDataSaga } from './mock/getMockData.saga';
import { getJavaData } from './javaServer/getDataFromJavaServerSaga';

export default function* rootSaga() {
  const sagas = [
    getMockDataSaga,
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
