import { FC } from "react";
import { GiCheckMark } from "react-icons/gi";
import cls from "./button-ok.module.scss";

interface ButtonOkProps {
  onClick: () => void;
  size?: string;
}

export const ButtonOk: FC<ButtonOkProps> = ({ size = "1.3rem", onClick }) => {
  return (
    <button
      className={cls.button_ok}
      onClick={onClick}
      data-testid="button-ok"
      style={{ width: size, height: size }}
    >
      <GiCheckMark />
    </button>
  );
};
