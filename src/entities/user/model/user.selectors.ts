import { RootState } from "@/app/providers/store-provider/store.types";

export const getLoginError = (state: RootState) => state.userReducer.error;
export const getUserIsAuth = (state: RootState) => state.userReducer.registered;
