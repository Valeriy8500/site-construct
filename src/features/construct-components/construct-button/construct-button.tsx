import { ReactElement, useState } from "react";
import ReactQuill from "react-quill";
import parse from "html-react-parser";
import { GiCheckMark } from "react-icons/gi";
import { Button } from "@/shared/ui/button";
import cls from "./construct-button.module.scss";

export const ButtonQuill = (): ReactElement => {
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
    <div className={cls.button}>
      {edit ? (
        <>
          <ReactQuill
            placeholder="Название кнопки"
            modules={modules}
            theme="snow"
            value={value}
            onChange={setValue}
          />
          <div className={cls.button__check_btn_container} title="Сохранить">
            <div className={cls.check_btn} onClick={() => setEdit(false)}>
              <GiCheckMark />
            </div>
          </div>
        </>
      ) : (
        <Button onClick={() => setEdit(true)} title="Редактировать">
          <>{parse(value)}</>
        </Button>
      )}
    </div>
  );
};
