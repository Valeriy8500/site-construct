import { ReactElement, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import parse from "html-react-parser";
import { Button } from "@/shared/ui/button";
import cls from "./construct-button.module.scss";
import { changeSiteElementContent } from "@/entities/site/model/site.selectors.ts";
import { useAppDispatch } from "@/shared/hooks/redux-hooks.ts";

interface ButtonQuillProps {
  edit: boolean;
  id: string;
  content: string;
}
export const ButtonQuill = ({ edit, id, content }: ButtonQuillProps): ReactElement => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>(content);

  useEffect(() => {
    if (!edit) {
      dispatch(changeSiteElementContent(id, value));
    }
  }, [edit]);

  const toolbarOptions = [
    [{ header: [3, 4, 5, 6, false] }],
    ["bold", "italic", "underline"],
    [{ color: [] }, { background: [] }, {}],
    [{ font: [] }],
    [{ align: [] }],
  ];

  const modules = {
    toolbar: toolbarOptions,
  };

  return (
    <div>
      {edit ? (
        <ReactQuill
          placeholder="Название кнопки"
          modules={modules}
          theme="snow"
          value={value}
          onChange={setValue}
        />
      ) : (
        <Button className={cls.button}>
          <>{parse(value)}</>
        </Button>
      )}
    </div>
  );
};
