import { SiteElement } from "@/entities/site/model/site.types.ts";
import { AppDispatch, RootState } from "@/app/providers/store-provider/store.types.ts";
import { siteSlice } from "./site.slice.ts";
import { addFormData, deleteFormData } from "@/entities/construct-form";

const {
  addElement,
  deleteElement,
  changeElementWidth,
  changeElementHeight,
  changeElementContent,
  changeElementPosition,
  clearSite,
  addSiteName,
  addSiteColor,
  changeElementUrl,
} = siteSlice.actions;

export const setSiteElement = (element: SiteElement) => (dispatch: AppDispatch) => {
  dispatch(addElement(element));
  dispatch(addFormData(element));
};

export const clearSiteElements = () => (dispatch: AppDispatch) => {
  dispatch(clearSite());
};

export const deleteSiteElement = (id: string) => (dispatch: AppDispatch) => {
  dispatch(deleteElement(id));
  dispatch(deleteFormData(id));
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

export const changeSiteElementUrl = (id: string, url: string) => (dispatch: AppDispatch) => {
  dispatch(changeElementUrl({ id, url }));
};

export const addName = (siteName: string) => (dispatch: AppDispatch) => {
  dispatch(addSiteName(siteName));
};

export const addColor = (color: string) => (dispatch: AppDispatch) => {
  dispatch(addSiteColor(color));
};

export const getSiteName = (state: RootState) => state.site.name;
export const getSiteColor = (state: RootState) => state.site.bg;
export const getSite = (state: RootState) => state.site;
