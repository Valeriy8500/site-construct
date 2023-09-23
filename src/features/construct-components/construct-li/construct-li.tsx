import { useEffect, useState } from "react";
import parse from "html-react-parser";
import ReactQuill from "react-quill";
import "quill/dist/quill.snow.css";
import cls from "./construct-li.module.scss";
import { useAppDispatch } from "@/shared/hooks/redux-hooks.ts";
import { changeSiteElementContent } from "@/entities/site/model/site.selectors.ts";
import { SiteElement } from "@/entities/site/model/site.types";

interface ListQuillProps {
  edit: boolean;
  id: string;
  content: string;
  position?: SiteElement["position"];
}

export const ListQuill = ({ edit, id, content, position }: ListQuillProps) => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState(
    content.includes("ul") ? content : `<ul><li>${content}</li></ul>`
  );

  useEffect(() => {
    if (!edit) {
      dispatch(changeSiteElementContent(id, value));
    }
  }, [edit]);

  const toolbarOptions = [
    [{ header: [3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ font: [] }],
    [{ list: "bullet" }],
  ];

  const modules = {
    toolbar: toolbarOptions,
  };

  return (
    <div className={cls.list} style={{ top: position?.top, left: position?.left }}>
      {edit ? (
        <ReactQuill modules={modules} theme="snow" value={value} onChange={setValue} />
      ) : (
        <div>{parse(value)}</div>
      )}
    </div>
  );
};
