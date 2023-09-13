import { FC } from "react";
import { ButtonAddProps } from "./types";
import cls from "./button-add.module.scss";

export const ButtonAdd: FC<ButtonAddProps> = ({ onClick }) => {
  return (
    <button className={cls.button_add} onClick={onClick}>
      +
    </button>
  );
};
