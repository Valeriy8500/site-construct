import { combineReducers, configureStore } from "@reduxjs/toolkit";
import constructHeadPanelSlice from "@/entities/site/model/colorPalette.slice";
import userApi from "@/entities/user/api";
import userSlice from "@/entities/user/model";
import siteSlice from "@/entities/site/model";
import siteApi from "@/entities/site/api";

export const rootReducer = combineReducers({
  [userSlice.name]: userSlice.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [siteSlice.name]: siteSlice.reducer,
  [constructHeadPanelSlice.name]: constructHeadPanelSlice.reducer,
  [siteApi.reducerPath]: siteApi.reducer
});

export const setupStore = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat([userApi.middleware, siteApi.middleware]);
  },
});
