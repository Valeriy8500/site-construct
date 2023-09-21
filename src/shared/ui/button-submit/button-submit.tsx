import { FC } from "react";
import cls from "./button-submit.module.scss";

interface ButtonSubmitProps {
  onSubmit: () => void;
}

export const ButtonSubmit: FC<ButtonSubmitProps> = ({ onSubmit }) => {
  return (
    <button className={cls.button_form} onClick={onSubmit}>
      Submit
    </button>
  );
};
