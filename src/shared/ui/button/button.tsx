import React, { ButtonHTMLAttributes, ReactElement } from "react";
import clsx from "clsx";
import cls from "./button.module.scss";

enum Themes {
  filled = "filled",
  clear = "clear",
  default = "default",
};

enum TypesButton {
  primary = "primary",
  failed = "failed",
  success = "success",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: Themes;
  typeButton?: TypesButton,
  color?: string,
  children: string | ReactElement,
  className?: string,
  id?: string,
  style?: object,
}

export const Button = (props: ButtonProps) => {
  const { className = "", id, children, theme, color, typeButton, ...other } = props;

  return (
    <button
      type="button"
      id={id}
      className={clsx(
        cls['button'],
        { [cls.custom]: color },
        cls[`${theme}-theme`],
        cls[`${color}-color`],
        cls[`${typeButton}-type`],
        className
      )}
      style={{ backgroundColor: `${color}`, color: "#ffffff", borderColor: `${color}` }}
      {...other}
    >
      {children}
    </button>
  );
};
