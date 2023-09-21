import { ChangeEvent } from "react";

export interface IInput {
  label: string;
  input: string;
  placeholder: string;
}

export interface ConstructInputEditProps {
  value: IInput;
  onEdit: (e: ChangeEvent<HTMLInputElement>) => void;
}
