import { ChangeEvent } from "react";

export interface ITextarea {
  label: string;
  textarea: string;
  placeholder: string;
  rows: string;
}

export interface ConstructTextareaEditProps {
  value: ITextarea;
  onEdit: (e: ChangeEvent<HTMLInputElement>) => void;
}
