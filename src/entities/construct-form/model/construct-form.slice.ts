import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/app/providers/store-provider/store.types";
import { SiteElement } from "@/entities/site/model/site.types";
import { isFormElement } from "../lib/is-from-element";

export interface FormItem {
  id: string;
  label: string;
  value: string;
}

const initialState: FormItem[] = [];

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addFormData(state, action: PayloadAction<SiteElement>) {
      if (isFormElement(action.payload.path)) {
        state.push({ id: action.payload.id, label: "", value: "" });
      }
    },
    updateFormData(state, action: PayloadAction<FormItem>) {
      const hasFormItem = Boolean(state.filter(item => item.id === action.payload.id).length);

      if (!hasFormItem) {
        state.push({ ...action.payload });
        return;
      }
      return state.map(item => (item.id === action.payload.id ? { ...action.payload } : item));
    },
    deleteFormData(state, action: PayloadAction<FormItem["id"]>) {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const { addFormData, updateFormData, deleteFormData } = formSlice.actions;

export const getFormList = (state: RootState) => state.form;
