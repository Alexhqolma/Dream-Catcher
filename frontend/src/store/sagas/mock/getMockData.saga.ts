import { getMockDreamsSaga } from "../../../mock/store/saga/getMockDreamsSaga";
import { getMockPhotoSaga } from "../../../mock/store/saga/getMockPhotoSaga";
import { getMockUsersSaga } from "../../../mock/store/saga/getMockUsersSaga";

export function* getMockDataSaga() {
console.log('getMockDataSaga');

  yield getMockUsersSaga();
  yield getMockDreamsSaga();
  yield getMockPhotoSaga();
}