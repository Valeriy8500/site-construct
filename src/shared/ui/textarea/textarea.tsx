import { FC, ChangeEvent } from "react";

interface TextareaProps {
  id: string;
  placeholder: string;
  name: string;
  rows: number;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const Textarea: FC<TextareaProps> = ({
  id,
  placeholder,
  name,
  rows,
  onChange,
  ...props
}) => {
  return (
    <textarea
      id={id}
      placeholder={placeholder}
      rows={rows}
      name={name}
      onChange={onChange}
      {...props}
    ></textarea>
  );
};
