import { LabelHTMLAttributes } from "react";
import clsx from "clsx";
import cls from "./label.module.scss";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  forValue: string;
  label: string;
  block?: boolean;
  error?: boolean;
}

export const Label = (props: LabelProps) => {
  const { className = "", forValue, label, block, error } = props;

  return (
    <label
      htmlFor={forValue}
      className={clsx(cls["label"], className, { [cls.block]: block }, { [cls.error]: error })}
    >
      {label}
    </label>
  );
};
