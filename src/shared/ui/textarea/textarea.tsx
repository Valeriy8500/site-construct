import { FC } from "react";

interface TextareaProps {
  id: string;
  placeholder: string;
  rows: number;
}

export const Textarea: FC<TextareaProps> = ({ id, placeholder, rows, ...props }) => {
  return <textarea id={id} placeholder={placeholder} rows={rows} {...props}></textarea>;
};
