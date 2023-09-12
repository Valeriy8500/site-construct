import { useState } from "react";
import { GiCheckMark } from "react-icons/gi";
import parse from "html-react-parser";
import ReactQuill from "react-quill";
import "quill/dist/quill.snow.css";
import cls from "./construct-ol.module.scss";

export const NumberedListQuill = () => {
  const [edit, setEdit] = useState(true);
  const [value, setValue] = useState("<ol><li>Нумерованный список</li></ol>");

  const toolbarOptions = [
    [{ header: [3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ font: [] }],
    [{ 'list': 'ordered' }],
  ];

  const modules = {
    toolbar: toolbarOptions,
  };

  return (
    <div className={cls.list}>
      {edit ? (
        <>
          <ReactQuill modules={modules} theme="snow" value={value} onChange={setValue} />
          <div className={cls.list__button}>
            <div className={cls.list__button_ok} onClick={() => setEdit(false)}>
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
