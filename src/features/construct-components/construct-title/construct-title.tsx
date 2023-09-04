import { useState } from "react";
import { GiCheckMark } from "react-icons/gi";
import parse from "html-react-parser";
import ReactQuill from "react-quill";
import "quill/dist/quill.snow.css";
import cls from "./construct-title.module.scss";

export const TitleQuill = () => {
  const [edit, setEdit] = useState(true);
  const [value, setValue] = useState("Заголовок");

  const toolbarOptions = [
    [{ header: 1 }, { header: 2 }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
  ];

  const modules = {
    toolbar: toolbarOptions,
  };

  const handleOk = () => {
    setEdit(false);
  };

  return (
    <div className={cls.title}>
      {edit ? (
        <>
          <ReactQuill modules={modules} theme="snow" value={value} onChange={setValue} />
          <div className={cls.title__button}>
            <div className={cls.title__button_ok} onClick={handleOk}>
              <GiCheckMark />
            </div>
          </div>
        </>
      ) : (
        <div onClick={() => setEdit(true)}>{parse(value)}</div>
      )}
    </div>
  );
};
