import { useEffect, useState } from "react";
import parse from "html-react-parser";
import ReactQuill from "react-quill";
import "quill/dist/quill.snow.css";
import cls from "./construct-title.module.scss";
import { useAppDispatch } from "@/shared/hooks/redux-hooks.ts";
import { changeSiteElementContent } from "@/entities/site/model/site.selectors.ts";

interface TitleQuillProps {
  edit: boolean;
  id: string;
  content: string;
}

export const TitleQuill = ({ edit, id, content }: TitleQuillProps) => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState(content);

  useEffect(() => {
    if (!edit) {
      dispatch(changeSiteElementContent(id, value));
    }
  }, [edit]);

  const toolbarOptions = [
    [{ header: 1 }, { header: 2 }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
  ];

  const modules = {
    toolbar: toolbarOptions,
  };

  return (
    <div className={cls.title} data-testid="construct-title">
      {edit ? (
        <>
          <ReactQuill modules={modules} theme="snow" value={value} onChange={setValue} />
        </>
      ) : (
        <div className={cls.title}>{parse(value)}</div>
      )}
    </div>
  );
};
