import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userApi from "@/entities/user/api";
import userSlice from "@/entities/user/model";
import siteApi from "@/entities/site/api";
import siteSlice from "@/entities/site/model";

export const rootReducer = combineReducers({
  [userApi.reducerPath]: userApi.reducer,
  [userSlice.name]: userSlice.reducer,
  [siteApi.reducerPath]: siteApi.reducer,
  [siteSlice.name]: siteSlice.reducer,
});

export const setupStore = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat([userApi.middleware, siteApi.middleware]);
  },
});
