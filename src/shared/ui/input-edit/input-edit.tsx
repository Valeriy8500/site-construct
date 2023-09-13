import { ChangeEvent, FC } from "react";
import cls from "./input-edit.module.scss";

interface InputEditProps {
  id?: string;
  name?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const InputEdit: FC<InputEditProps> = ({ id, name, value, onChange }) => {
  return (
    <input
      className={cls.input_edit}
      id={id}
      name={name}
      type="text"
      value={value}
      onChange={e => onChange(e)}
    />
  );
};
