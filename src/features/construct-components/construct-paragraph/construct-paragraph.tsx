import { useEffect, useState } from "react";
import parse from "html-react-parser";
import ReactQuill from "react-quill";
import "quill/dist/quill.snow.css";
import cls from "./construct-paragraph.module.scss";
import { changeSiteElementContent } from "@/entities/site/model/site.selectors.ts";
import { useAppDispatch } from "@/shared/hooks/redux-hooks.ts";
import { SiteElement } from "@/entities/site/model/site.types";

interface ParagraphQuillProps {
  edit: boolean;
  id: string;
  content: string;
  position?: SiteElement["position"];
}
export const ParagraphQuill = ({ edit, content, id, position }: ParagraphQuillProps) => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState(content);

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
    [{ align: [] }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ script: "sub" }, { script: "super" }],
  ];

  const modules = {
    toolbar: toolbarOptions,
  };

  return (
    <div
      className={cls.paragraph}
      style={{ top: position?.top, left: position?.left }}
      data-testid="construct-paragraph"
    >
      {edit ? (
        <ReactQuill modules={modules} theme="snow" value={value} onChange={setValue} />
      ) : (
        <div>{parse(value)}</div>
      )}
    </div>
  );
};
