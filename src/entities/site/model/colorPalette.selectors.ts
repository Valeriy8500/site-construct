import { AppDispatch, RootState } from "@/app/providers/store-provider/store.types.ts";
import constructHeadPanelSlice from "@/entities/site/model/colorPalette.slice";

const { addSiteName, addSiteColor } = constructHeadPanelSlice.actions;

export const addName = (siteName: string) => (dispatch: AppDispatch) => {
  dispatch(addSiteName(siteName));
};

export const addColor = (color: string) => (dispatch: AppDispatch) => {
  dispatch(addSiteColor(color));
};

export const getSiteName = (state: RootState) => state.constructHeadPanel.siteName;
export const getSiteColor = (state: RootState) => state.constructHeadPanel.siteColor;
