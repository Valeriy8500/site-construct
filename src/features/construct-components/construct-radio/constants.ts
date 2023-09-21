import { nanoid } from "@reduxjs/toolkit";
import { IRadioField } from "./types";

export const RADIO: IRadioField[] = [
  { id: nanoid(), label: "Radio 1", isChecked: true },
  { id: nanoid(), label: "Radio 2", isChecked: false },
  { id: nanoid(), label: "Radio 3", isChecked: false },
];
