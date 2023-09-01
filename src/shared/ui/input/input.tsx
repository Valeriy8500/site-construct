import React, { ChangeEventHandler, InputHTMLAttributes } from "react";
import clsx from "clsx";
import cls from "./input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  defaultValue?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  rightIcon?: React.ReactNode;
}

export const Input = (props: InputProps) => {
  const {
    id,
    rightIcon,
    error = false,
    className = "",
    onChange,
    ...other
  } = props;

  return (
    <>
      <div className={clsx(cls["input-container"])}>
        <input
          id={id}
          onChange={onChange}
          className={clsx(
            cls["input"],
            className,
            { [cls.error]: error },
            { [cls["right-space"]]: rightIcon }
          )}
          {...other}
        />
        {rightIcon && <i className={clsx(cls["input-icon"])}>{rightIcon}</i>}
      </div>
      <p className={clsx(cls["text-error"])}>{error}</p>
    </>
  );
};
