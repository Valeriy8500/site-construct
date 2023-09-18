import { SiteElement } from "@/entities/site/model/site.types.ts";
import { AppDispatch, RootState } from "@/app/providers/store-provider/store.types.ts";
import { siteSlice } from "./site.slice.ts";

const {
  addElement,
  deleteElement,
  changeElementWidth,
  changeElementHeight,
  changeElementContent,
  changeElementPosition,
  clearSite,
} = siteSlice.actions;
export const setSiteElement = (element: SiteElement) => (dispatch: AppDispatch) => {
  dispatch(addElement(element));
};

export const clearSiteElements = () => (dispatch: AppDispatch) => {
  dispatch(clearSite());
};

export const deleteSiteElement = (id: string) => (dispatch: AppDispatch) => {
  dispatch(deleteElement(id));
};

export const changeSiteElementWidth = (id: string, change: number) => (dispatch: AppDispatch) => {
  dispatch(changeElementWidth({ id, change }));
};

export const changeSiteElementHeight = (id: string, change: number) => (dispatch: AppDispatch) => {
  dispatch(changeElementHeight({ id, change }));
};

export const changeSiteElementPosition =
  (id: string, change: { top: number; left: number }) => (dispatch: AppDispatch) => {
    dispatch(changeElementPosition({ id, change }));
  };

export const changeSiteElementContent =
  (id: string, content: string) => (dispatch: AppDispatch) => {
    dispatch(changeElementContent({ id, content }));
  };

export const getSite = (state: RootState) => state.site;
