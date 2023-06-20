import { getAllDreamsSaga } from "./getAllDreamsSaga";
import { getCreatedDreamsSaga } from "./getCreatedDreamsSaga";
import { getTakenDreamsSaga } from "./getTakenDreamsSaga";
import { postCreateDreamSaga } from "./postCreateDreamSaga";

export function* getJavaData() {
  yield getAllDreamsSaga();
  yield getCreatedDreamsSaga('1');
  yield getTakenDreamsSaga('2');

  // const formData = new FormData();

  // formData.append("name", "Groucho");
  // formData.append("text", "123456");
  // formData.append("status", 'status');  
  // formData.append("userId", '111');

  // HTML file input, chosen by user
  // formData.append("userfile", fileInputElement.files[0]);

  // JavaScript file-like object
  // const content = '<q id="a"><span id="b">hey!</span></q>'; 
  // the body of the new file…
  // const blob = new Blob([content], { type: "text/xml" });

  // formData.append("webmasterfile", blob);

  // const request = new XMLHttpRequest();
  // request.open("POST", "http://foo.com/submitform.php");
  // request.send(formData);

  const request = {
    name: 'name',
    userId: '1123123',
  }


  yield postCreateDreamSaga(request);
}
