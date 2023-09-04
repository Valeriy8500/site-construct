import React, { useState, useRef } from "react";
import cls from "./construct-image.module.scss";
import { GiPencil } from "react-icons/gi";

export const ConstructImage = () => {
  const [url, setUrl] = useState<string>("");
  const [showBnt, setShowBtn] = useState<boolean>(true);
  const inputFile: React.MutableRefObject<any> = useRef(null);

  const upload = (file: string | Blob): Promise<string> => {
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
        })
        .catch(error => {
          reject("Upload failed");
          console.error("Error:", error);
        });
    });
  };

  const onButtonClick = () => {
    inputFile.current && inputFile.current?.click();
  };

  const onChangeFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    event.preventDefault();
    const file = (event.target.files && event.target.files[0]) || "";
    const res = await upload(file);
    setUrl(res);
    setShowBtn(false);
  };

  return (
    <div className={cls.image}>
      <input
        type="file"
        id="file"
        onChange={onChangeFile}
        ref={inputFile}
        style={{ display: "none" }}
      />
      {showBnt && (
        <button className={cls.btn} onClick={onButtonClick}>
          Открыть картинку
        </button>
      )}

      <div className={cls.image__button}>
        <img src={url} />
        <div
          title="Заменить картинку"
          className={cls.image__button_ok}
          onClick={() => {
            inputFile.current?.click();
          }}
        >
          <GiPencil />
        </div>
      </div>
    </div>
  );
};
