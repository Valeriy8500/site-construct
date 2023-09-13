import { SiteElement } from "@/entities/site/model/site.types.ts";
import { AppDispatch, RootState } from "@/app/providers/store-provider/store.types.ts";
import siteSlice from "@/entities/site/model/site.slice.ts";

const { addElement, deleteElement, changeElementWidth, changeElementHeight } = siteSlice.actions;
export const setSiteElement = (element: SiteElement) => (dispatch: AppDispatch) => {
  dispatch(addElement(element));
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

export const getSiteElements = (state: RootState) => state.site.elements;
