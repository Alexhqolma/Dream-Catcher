import { all, call, spawn } from 'redux-saga/effects';
import { watchUserSaga as watchUserSagaNode } from './nodeServer/user/watchUser.saga';
import { getMockDataSaga } from './mock/getMockData.saga';
// import { getJavaData } from './javaServer/getDataFromJavaServerSaga';
import { watchDreamSaga as watchDreamSagaNode } from './nodeServer/dream/watchDream.saga';
import { watchUserSaga as watchUserSagaJava } from './javaServer/user/watchUser.saga';

export default function* rootSaga() {
  const sagas = [
    // getMockDataSaga,
    // getJavaData,
    // watchUserSagaNode,
    // watchDreamSagaNode,

    watchUserSagaJava,
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
