import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userApi } from "@/entities/user/api/user.api";
import { userReducer } from "@/entities/user";
import siteSlice from "@/entities/site/model/site.slice.ts";
import constructHeadPanelSlice from "@/entities/site/model/colorPalette.slice";

export const rootReducer = combineReducers({
  userReducer,
  [userApi.reducerPath]: userApi.reducer,
  [siteSlice.name]: siteSlice.reducer,
  [constructHeadPanelSlice.name]: constructHeadPanelSlice.reducer
});

export const setupStore = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(userApi.middleware);
  },
});
