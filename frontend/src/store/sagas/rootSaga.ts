import { ForkEffect, all, call, spawn  } from 'redux-saga/effects';
import { watchUserSaga as watchUserSagaNode } from './nodeServer/user/watchUser.saga';
import { getMockDataSaga } from './mock/getMockData.saga';
// import { getJavaData } from './javaServer/getDataFromJavaServerSaga';
import { watchDreamSaga as watchDreamSagaNode } from './nodeServer/dream/watchDream.saga';
import { watchUserSaga as watchUserSagaJava } from './javaServer/user/watchUser.saga';

export default function* rootSaga(): Generator<any, void, any> {
  const sagas = [
    getMockDataSaga,

    watchUserSagaNode,
    watchDreamSagaNode,
    
    watchUserSagaJava,
  ];

  const retrySagas: Array<Generator<ForkEffect<void>, void, any[]>> = yield sagas.map(saga => {
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
