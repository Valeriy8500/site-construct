import { ReactElement, useState } from "react";
import ReactQuill from "react-quill";
import parse from "html-react-parser";
import { GiCheckMark } from "react-icons/gi";
import cls from "./construct-quote.module.scss";

export const QuoteQuill = (): ReactElement => {
  const [edit, setEdit] = useState<boolean>(true);
  const [value, setValue] = useState<string>("");

  const toolbarOptions = [
    [{ header: [3, 4, 5, 6, false] }],
    ["bold", "italic", "underline"],
    [{ color: [] }, { background: [] }],
    [{ font: [] }],
    [{ align: [] }],
  ];

  const modules = {
    toolbar: toolbarOptions,
  };

  return (
    <div className={cls.quote}>
      {edit ? (
        <>
          <ReactQuill
            placeholder="Цитата"
            modules={modules}
            theme="snow"
            value={value}
            onChange={setValue}
          />
          <div className={cls.quote__check_quote_container} title="Сохранить">
            <div className={cls.check_quote} onClick={() => setEdit(false)}>
              <GiCheckMark />
            </div>
          </div>
        </>
      ) : (
        <q className={cls.quote__quote_string} onClick={() => setEdit(true)} title="Редактировать">
          {parse(value)}
        </q>
      )}
    </div>
  );
};
