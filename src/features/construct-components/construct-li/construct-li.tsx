import { useState } from "react";
import { GiCheckMark } from "react-icons/gi";
import parse from "html-react-parser";
import ReactQuill from "react-quill";
import "quill/dist/quill.snow.css";
import cls from "./construct-li.module.scss";

export const ListQuill = () => {
  const [edit, setEdit] = useState(true);
  const [value, setValue] = useState("<ul><li>Маркированный список</li></ul>");

  const toolbarOptions = [
    [{ header: [3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ font: [] }],
    [{ 'list': 'bullet' }],
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
