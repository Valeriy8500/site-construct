import { useState } from "react";
import { GiCheckMark } from "react-icons/gi";
import parse from "html-react-parser";
import ReactQuill from "react-quill";
import "quill/dist/quill.snow.css";
import cls from "./construct-paragraph.module.scss";

export const ParagraphQuill = () => {
  const [edit, setEdit] = useState(true);
  const [value, setValue] = useState("Параграф");

  const toolbarOptions = [
    [{ header: [3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ font: [] }],
    [{ align: [] }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ script: "sub" }, { script: "super" }],
  ];

  const modules = {
    toolbar: toolbarOptions,
  };

  return (
    <div className={cls.paragraph} data-testid="construct-paragraph">
      {edit ? (
        <>
          <ReactQuill modules={modules} theme="snow" value={value} onChange={setValue} />
          <div className={cls.paragraph__button}>
            <div className={cls.paragraph__button_ok} onClick={() => setEdit(false)}>
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
