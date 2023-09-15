import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  siteName: string;
  siteColor: string;
}

const initialState: IInitialState = {
  siteName: '',
  siteColor: ''
}

export const constructHeadPanelSlice = createSlice({
  name: 'constructHeadPanel',
  initialState,
  reducers: {
    addSiteName(state, action: PayloadAction<string>) {
      state.siteName = action.payload;
    },
    addSiteColor(state, action: PayloadAction<string>) {
      state.siteColor = action.payload;
    },
  }
});

export default constructHeadPanelSlice;