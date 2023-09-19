import { FC } from "react";
import { getTransformCode } from "../model/get-transform-code";
import { HtmlCodeProps } from "../model/html-code.types";
import cls from "./html-code.module.scss";

export const HtmlCode: FC<HtmlCodeProps> = ({ htmlCode }) => {
  if (!htmlCode) return null;

  const htmlList = getTransformCode(htmlCode.outerHTML);

  return (
    <div data-testid="html-code">
      <h2 className={cls.html__title}>Код HTML сайта</h2>
      <ul>
        {htmlList.map((item, index) => {
          if (index) return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};
