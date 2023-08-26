import React, { ButtonHTMLAttributes, ReactElement } from "react";
import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import cls from "./button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: "filled" | "clear" | "default";
  typeButton?: "primary" | "failed" | "success",
  color?: string,
  children: string | ReactElement,
  className?: string,
  id?: string,
  style?: object,
}

export const Button = (props: ButtonProps) => {
  const {
    className = "",
    id,
    children,
    theme,
    color,
    typeButton,
    ...other
  } = props;

  return (
    <button
      type="button"
      id={id}
      className={clsx(
        cls['button'],
        cls[`${theme}-theme`],
        cls[`${color}-color`],
        cls[`${typeButton}-type`],
        className,
      )}
      style={{ backgroundColor: `${color}`, color: '#ffffff', borderColor: `${color}` }}
      {...other}
    >
      {children}
    </button>
  );
};
