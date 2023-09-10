import { FC } from "react";
import clsx from "clsx";
import { ICheckbox } from "@/features/construct-components/construct-checkbox/types";
import cls from "./checkbox.module.scss";

interface CheckboxProps {
  field: ICheckbox;
  onChecked: (id: string) => void;
}

export const Checkbox: FC<CheckboxProps> = ({ field, onChecked }) => {
  return (
    <div className={cls.checkbox__wrapper}>
      <label className={cls.checkbox__label}>
        <input
          id={field.id}
          className={clsx(cls.checkbox__input, field.isChecked && cls.checkbox__input_checked)}
          type="checkbox"
          checked={field.isChecked}
          onChange={() => onChecked(field.id)}
        />
        <span className={cls.checkbox__label_text}>{field.label}</span>
      </label>
    </div>
  );
};
