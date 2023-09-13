import { FC } from "react";
import { ButtonDeleteProps } from "./types";
import cls from "./button-delete.module.scss";

export const ButtonDelete: FC<ButtonDeleteProps> = ({ onClick }) => {
  return (
    <button className={cls.button_delete} onClick={onClick}>
      x
    </button>
  );
};
