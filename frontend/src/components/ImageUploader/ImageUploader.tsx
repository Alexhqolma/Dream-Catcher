// NOT WORK!!!

import { MouseEventHandler, useRef, useState } from 'react';
// import { submitForm } from "../../services/fileUploader";
// import { useImagesDispatch } from "../../context/ImageContext";
import { CustomButton } from "../UI/CustomButton";

export const ImageUploader = () => {
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  // const dispatch = useImagesDispatch();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const formSubmitHandler: MouseEventHandler = async (e) => {
    e.preventDefault();
    // await submitForm(selectedFiles!!);
    setSelectedFiles(null);
    // dispatch!!({ type: "outdated" });
  };

  return (
    <>
      <section>
        <h3>Upload a new image</h3>
        <input
          hidden
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          onChange={(e: any) => setSelectedFiles(e.target.files)}
        />
        <div
          onClick={() => {
            fileInputRef.current?.click();
          }}
        >
          <CustomButton title="Select file" />
        </div>{" "}
        {selectedFiles && Array.from(selectedFiles).map((file, i) => (
          <li key={i}>
            {file.name} - {file.type}
          </li>
        ))}
      </section>
      <section>
        <button disabled={selectedFiles === null} onClick={formSubmitHandler}>
          <CustomButton title="Upload" />
        </button>
      </section>
    </>
  );
};
