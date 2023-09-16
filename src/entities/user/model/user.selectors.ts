import { AppDispatch, RootState } from "@/app/providers/store-provider/store.types";
import userSlice from "./user.slice";
import { RefreshRes } from "../api/user.api.types";

const { logout, refreshTokens } = userSlice.actions;
export const getUserAuthError = (state: RootState) => state.user.error;
export const getLoginError = (state: RootState) => state.user.error;
export const getUserIsAuth = (state: RootState): boolean => Boolean(state.user.user.accessToken);

export const getUserId = (state: RootState): string => state.user.user.userId;

export const getUser = (state: RootState) => state.user.user;

export const userLogout = () => (dispatch: AppDispatch) => {
  dispatch(logout());
};

export const userRefresh =
  (payload: RefreshRes & { expiresAccess: number; expiresRefresh: number }) =>
  (dispatch: AppDispatch) => {
    dispatch(refreshTokens(payload));
  };
