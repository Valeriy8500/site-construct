import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ISite, ISiteContent } from "@/entities/site/model/site.types.ts";

const initialState: ISite = {
  id: "",
  url: "",
  name: "",
  authorId: "",
  updatedAt: 0,
  bg: "",
  html: "",
  css: "",
  content: [],
};

export const siteSlice = createSlice({
  name: "site",
  initialState,
  reducers: {
    addElement(state, action: PayloadAction<ISiteContent>) {
      state.content.push(action.payload);
    },
  },
});

export const { actions: siteActions, reducer: siteReducer, name: siteSliceName } = siteSlice;
