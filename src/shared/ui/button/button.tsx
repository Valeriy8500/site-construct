import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import cls from "./button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: "filled" | "clear";
}

export const Button = (props: ButtonProps) => {
  const { className = "", id, children, theme = "filled", ...other } = props;

  return (
    <button type="button" id={id} className={clsx(cls[`${theme}Theme`], className)} {...other}>
      {children}
    </button>
  );
};
