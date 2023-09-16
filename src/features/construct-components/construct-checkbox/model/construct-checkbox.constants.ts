import { nanoid } from "@reduxjs/toolkit";
import { ICheckbox } from "./construct-checkbox.types";

export const CHECKBOX_INIT: ICheckbox[] = [
  { id: nanoid(), label: "CheckItem 1", isChecked: true },
  { id: nanoid(), label: "CheckItem 2", isChecked: false },
  { id: nanoid(), label: "CheckItem 3", isChecked: false },
];
