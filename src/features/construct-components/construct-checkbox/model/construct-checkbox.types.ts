import { ChangeEvent } from "react";

export interface ICheckbox {
  id: string;
  label: string;
  isChecked: boolean;
}

export interface ConstructCheckboxEditProps {
  fields: ICheckbox[];
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onDelete: (id: string) => void;
  onAddElement: () => void;
}
