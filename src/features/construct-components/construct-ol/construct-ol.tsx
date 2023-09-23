import { useEffect, useState } from "react";
import parse from "html-react-parser";
import ReactQuill from "react-quill";
import "quill/dist/quill.snow.css";
import cls from "./construct-ol.module.scss";
import { useAppDispatch } from "@/shared/hooks/redux-hooks.ts";
import { changeSiteElementContent } from "@/entities/site/model/site.selectors.ts";
import { SiteElement } from "@/entities/site/model/site.types";

interface NumberedListQuillProps {
  edit: boolean;
  id: string;
  content: string;
  position?: SiteElement["position"];
}

export const NumberedListQuill = ({ edit, id, content, position }: NumberedListQuillProps) => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState(
    content.includes("ol") ? content : `<ol><li>${content}</li></ol>`
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
    [{ list: "ordered" }],
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
