import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { ISite, SiteElement } from "@/entities/site/model/site.types.ts";
import { siteApi } from "../api/site.api";

const initialState: ISite = {
  id: uuidv4(),
  name: `Test site ${Date.now()}`,
  bg: "blueviolet",
  updatedAt: 0,
  authorId: "",
  forkCount: 0,
  elements: [],
};

export const siteSlice = createSlice({
  name: "site",
  initialState,
  reducers: {
    addElement(state, action: PayloadAction<SiteElement>) {
      state.elements.push(action.payload);
    },
    deleteElement(state, action: PayloadAction<string>) {
      state.elements = state.elements.filter(item => item.id !== action.payload);
    },
    clearSite() {
      return initialState;
    },
    changeElementContent(state, action: PayloadAction<{ id: string; content: string }>) {
      state.elements = state.elements.map(item =>
        item.id !== action.payload.id ? item : { ...item, content: action.payload.content }
      );
    },
    changeElementUrl(state, action: PayloadAction<{ id: string; url: string }>) {
      state.elements = state.elements.map(item =>
        item.id !== action.payload.id ? item : { ...item, url: action.payload.url }
      );
    },
    changeElementPosition(
      state,
      action: PayloadAction<{ id: string; change: { top: number; left: number } }>
    ) {
      state.elements = state.elements.map(item =>
        item.id === action.payload.id
          ? {
              ...item,
              position: {
                top:
                  item.position.top + action.payload.change.top < 0
                    ? 0
                    : item.position.top + action.payload.change.top,
                left:
                  item.position.left + action.payload.change.left < 0
                    ? 0
                    : item.position.left + action.payload.change.left,
              },
            }
          : item
      );
    },
    changeElementWidth(state, action: PayloadAction<{ id: string; change: number }>) {
      state.elements = state.elements.map(item =>
        item.id === action.payload.id
          ? {
              ...item,
              width:
                item.width + action.payload.change < 0 ? 20 : item.width + action.payload.change,
            }
          : item
      );
    },
    changeElementHeight(state, action: PayloadAction<{ id: string; change: number }>) {
      state.elements = state.elements.map(item =>
        item.id === action.payload.id
          ? {
              ...item,
              height:
                item.height + action.payload.change < 0 ? 20 : item.height + action.payload.change,
            }
          : item
      );
    },
    addSiteName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    addSiteColor(state, action: PayloadAction<string>) {
      state.bg = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addMatcher(siteApi.endpoints.getSiteById.matchFulfilled, (state, { payload }) => {
      state.id = payload.id;
      state.elements = payload.elements;
      state.bg = payload.bg;
      state.name = payload.name;
      state.authorId = payload.authorId;
      state.updatedAt = payload.updatedAt;
      state.forkCount = payload.forkCount;
    });
  },
});
