import { nanoid } from "@reduxjs/toolkit";
import { IRadioField } from "./types";

export const RADIO: IRadioField[] = [
  { id: nanoid(), label: "Label1", isChecked: true },
  { id: nanoid(), label: "Label2", isChecked: false },
  { id: nanoid(), label: "Label3", isChecked: false },
];
