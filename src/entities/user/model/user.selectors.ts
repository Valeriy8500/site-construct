import { RootState } from "@/app/providers/store-provider/store.types";

export const getUserAuthError = (state: RootState) => state.userReducer.error;
export const getLoginError = (state: RootState) => state.userReducer.error;
export const getUserIsAuth = (state: RootState) => state.userReducer.registered;
export const getUserNameAndLastname = (state: RootState) => state.userReducer.name;
export const getUserEmail = (state: RootState) => state.userReducer.email;
