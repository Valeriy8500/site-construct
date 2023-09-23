import { ReactElement, useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import parse from "html-react-parser";
import cls from "./construct-button.module.scss";
import { changeSiteElementContent } from "@/entities/site/model/site.selectors.ts";
import { useAppDispatch } from "@/shared/hooks/redux-hooks.ts";
import { SiteElement } from "@/entities/site/model/site.types";
interface ButtonQuillProps {
  edit: boolean;
  id: string;
  content: string;
  width?: number;
  height: number;
  position?: SiteElement["position"];
}
export const ButtonQuill = ({
  edit,
  id,
  content,
  width,
  height,
  position,
}: ButtonQuillProps): ReactElement => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>(content);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (buttonRef?.current) {
      const span: HTMLElement | null = buttonRef.current.querySelector("span");
      if (span) {
        buttonRef.current.style.backgroundColor = span?.style?.backgroundColor;
        buttonRef.current.style.borderColor = span?.style?.backgroundColor;
      }
    }
  });

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
    <div data-testid="construct-button">
      {edit ? (
        <ReactQuill
          placeholder="Название кнопки"
          modules={modules}
          theme="snow"
          value={value}
          onChange={setValue}
        />
      ) : (
        <button
          className={cls.button}
          style={{ width, height: height / 2, top: position?.top, left: position?.left }}
          ref={buttonRef}
        >
          <>{parse(value)}</>
        </button>
      )}
    </div>
  );
};
