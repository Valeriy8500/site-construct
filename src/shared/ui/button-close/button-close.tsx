import { FC } from "react";
import cls from "./button-close.module.scss";

interface ButtonCloseProps {
  size?: string;
  onClose: () => void;
}

export const ButtonClose: FC<ButtonCloseProps> = ({ size = "1rem", onClose }) => {
  return (
    <button className={cls.button_close} style={{ fontSize: size }} onClick={onClose}>
      X
    </button>
  );
};
