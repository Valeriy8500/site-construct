import { nanoid } from "@reduxjs/toolkit";
import { ISelectOption } from "./types";

export const SELECT_INIT_OPTIONS: ISelectOption[] = [
  { id: nanoid(), value: "chocolate", label: "Chocolate" },
  { id: nanoid(), value: "strawberry", label: "Strawberry" },
  { id: nanoid(), value: "vanilla", label: "Vanilla" },
];
