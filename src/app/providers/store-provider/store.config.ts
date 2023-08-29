import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userApi } from "@/entities/user/api/user.api";
import { userReducer } from "@/entities/user";

export const rootReducer = combineReducers({
  userReducer,
  [userApi.reducerPath]: userApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => {
      return getDefaultMiddleware().concat(userApi.middleware);
    },
  });
};
