import { ReactElement, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import parse from "html-react-parser";
import cls from "./construct-quote.module.scss";
import { useAppDispatch } from "@/shared/hooks/redux-hooks.ts";
import { changeSiteElementContent } from "@/entities/site/model/site.selectors.ts";
import { SiteElement } from "@/entities/site/model/site.types";

interface QuoteQuillProps {
  edit: boolean;
  id: string;
  content: string;
  position?: SiteElement["position"];
}

export const QuoteQuill = ({ edit, id, content, position }: QuoteQuillProps): ReactElement => {
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
    [{ color: [] }, { background: [] }],
    [{ font: [] }],
    [{ align: [] }],
  ];

  const modules = {
    toolbar: toolbarOptions,
  };

  return (
    <div
      className={cls.quote}
      style={{ top: position?.top, left: position?.left }}
    >
      {edit ? (
        <>
          <ReactQuill modules={modules} theme="snow" value={value} onChange={setValue} />
        </>
      ) : (
        <q className={cls.quote__quote_string}>{parse(value)}</q>
      )}
    </div>
  );
};
