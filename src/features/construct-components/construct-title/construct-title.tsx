import { useEffect, useState } from "react";
import parse from "html-react-parser";
import ReactQuill from "react-quill";
import "quill/dist/quill.snow.css";
import cls from "./construct-title.module.scss";
import { useAppDispatch } from "@/shared/hooks/redux-hooks.ts";
import { changeSiteElementContent } from "@/entities/site/model/site.selectors.ts";
import { SiteElement } from "@/entities/site/model/site.types";

interface TitleQuillProps {
  edit: boolean;
  id: string;
  content: string;
  position?: SiteElement["position"];
}

export const TitleQuill = ({ edit, id, content, position }: TitleQuillProps) => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState(content);

  useEffect(() => {
    if (!edit) {
      dispatch(changeSiteElementContent(id, value));
    }
  }, [edit]);

  const toolbarOptions = [
    [{ header: [1, 2, 3, 4, 5, 6] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ font: [] }],
    [{ align: [] }],
    [{ size: ["small", false, "large", "huge"] }],
  ];

  const modules = {
    toolbar: toolbarOptions,
  };

  return (
    <div
      className={cls.title}
      style={{ top: position?.top, left: position?.left }}
      data-testid="construct-title"
    >
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
