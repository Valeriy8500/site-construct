import { FC } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import cls from "./button-edit.module.scss";

interface ButtonEditProps {
  size?: string;
  onClick: () => void;
}

export const ButtonEdit: FC<ButtonEditProps> = ({ size = "1.3rem", onClick }) => {
  return (
    <button className={cls.button_edit} style={{ width: size, height: size }} onClick={onClick}>
      <AiOutlineEdit />
    </button>
  );
};
