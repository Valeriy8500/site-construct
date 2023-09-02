import { useState } from "react";

import parse from "html-react-parser";
import ReactQuill from "react-quill";
import Quill from "quill";
// @ts-ignore
import ImageUploader from "quill-image-uploader";

import "quill/dist/quill.snow.css";
import "quill-image-uploader/dist/quill.imageUploader.min.css";
import cls from "./construct-image.module.scss";
Quill.register("modules/imageUploader", ImageUploader);

export const ImageQuill = () => {
  const [value, setValue] = useState("");

  const toolbarOptions = [["image"]];

  const imageUploader = {
    upload: (file: string | Blob) => {
      console.log(file);

      return new Promise((resolve, reject): void => {
        const formData = new FormData();
        formData.append("image", file);

        fetch(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_LOAD_IMAGE_KEY}`, {
          method: "POST",
          body: formData,
        })
          .then(response => response.json())
          .then(result => {
            resolve(result.data.url);
            setValue(`<p><img src=${result.data.url}></p>`);
          })
          .catch(error => {
            reject("Upload failed");
            console.error("Error:", error);
          });
      });
    },
  };
  const modules = {
    toolbar: toolbarOptions,
    imageUploader,
  };

  return (
    <div className={cls.image}>
      <ReactQuill modules={modules} theme="snow" value={value} onChange={setValue} />
      <div>{parse(value)}</div>
    </div>
  );
};
