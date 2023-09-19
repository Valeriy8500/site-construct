import { FC } from "react";
import { extractCSS } from "../model/extract-css-code";
import { CssCodeProps } from "../model/css-code.types";
import cls from "./css-code.module.scss";

export const CssCode: FC<CssCodeProps> = ({ node }) => {
  if (!node) return null;

  const stylesList: string[] = extractCSS(node);

  return (
    <div data-testid="css-code">
      <h2 className={cls.css__title}>Код CSS сайта</h2>
      <ul className={cls.css__list}>
        {stylesList.map((item, index) => {
          if (index > 0 && index < stylesList.length - 1)
            return (
              <li className={cls.css__item} key={index}>
                {item}
              </li>
            );
        })}
      </ul>
    </div>
  );
};
