import { ChangeEvent } from "react";

export interface IRadioField {
  id: string;
  label: string;
  isChecked: boolean;
}

export interface ConstructRadioEditProps {
  fields: IRadioField[];
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onDelete: (id: string) => void;
  onAddElement: () => void;
}
