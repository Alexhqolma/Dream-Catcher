import { getAllDreamsSaga } from "../getAllDreamsSaga";
import { getCreatedDreamsSaga } from "../getCreatedDreamsSaga";
import { getTakenDreamsSaga } from "../getTakenDreamsSaga";
import { postCreateDreamSaga } from "../postCreateDreamSaga";

export function* getJavaData() {
  yield getAllDreamsSaga();
  yield getCreatedDreamsSaga('1');
  yield getTakenDreamsSaga('2');
  yield postCreateDreamSaga({
    title: 'string',
    text: 'string',
    userId: 'string',
    handler: null,
    status: false,
    messages: [],
    photo: null,
  });
}
