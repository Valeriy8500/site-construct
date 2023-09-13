import { FC, ChangeEvent } from "react";
import clsx from "clsx";
import { IRadioField } from "@/features/construct-components/construct-radio/types";
import cls from "./radio.module.scss";

interface RadioProps {
  radio: IRadioField;
  onChecked: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Radio: FC<RadioProps> = ({ radio, onChecked }) => {
  return (
    <label className={cls.radio__label}>
      <input
        className={clsx(cls.radio__input, radio.isChecked && cls.radio__input_checked)}
        id={radio.id}
        type="radio"
        name="radio"
        value={radio.label}
        checked={radio.isChecked}
        onChange={e => onChecked(e)}
      />
      <span className={cls.radio__label_text}>{radio.label}</span>
    </label>
  );
};
