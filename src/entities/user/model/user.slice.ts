import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserState } from "./user.types";
import { userApi } from "../api/user.api";
import { IRegisterRes, RefreshRes } from "../api/user.api.types";
import { getUserFromResponse } from "@/entities/user/lib/getUserFromResponse";
import { localStorageService } from "@/shared/services/localStorage.service";

type ErrorType = {
  data: { error: { message: string } };
};

interface Initial {
  user: IUserState;
  error: string | null;
}

const localUser = localStorageService.getUser();

const userInitial: IUserState = {
  userId: "",
  email: "",
  name: "",
  accessToken: "",
  refreshToken: "",
  expiresAccess: 0,
  expiresRefresh: 0,
};

const initialState: Initial = {
  user: localUser || userInitial,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout(state) {
      localStorageService.removeUser();
      state.user = userInitial;
      state.error = initialState.error;
    },
    refreshTokens(
      state,
      action: PayloadAction<RefreshRes & { expiresAccess: number; expiresRefresh: number }>
    ) {
      state.user = {
        ...state.user,
        accessToken: action.payload.access_token,
        refreshToken: action.payload.refresh_token,
        expiresAccess: action.payload.expiresAccess,
        expiresRefresh: action.payload.expiresRefresh,
      };
      localStorageService.refreshTokens(action.payload);
    },
  },
  extraReducers: builder => {
    builder.addMatcher(userApi.endpoints.login.matchFulfilled, (state, { payload }) => {
      const user = getUserFromResponse(payload);
      state.user = user;
      state.error = null;
      localStorageService.setUser(user);
    });

    builder.addMatcher<PayloadAction<ErrorType>>(
      userApi.endpoints.login.matchRejected,
      (state, { payload }) => {
        state.error = payload?.data?.error?.message;
        localStorageService.removeUser();
        state.user = initialState.user;
      }
    );
    //регистрация
    builder.addMatcher<PayloadAction<ErrorType>>(
      userApi.endpoints.register.matchRejected,
      (state, { payload }) => {
        state.error = payload?.data?.error?.message;
        localStorageService.removeUser();
        state.user = initialState.user;
      }
    );
    builder.addMatcher<PayloadAction<IRegisterRes>>(
      userApi.endpoints.register.matchFulfilled,
      (state, { payload }) => {
        const user = getUserFromResponse(payload);
        state.user = user;
        state.error = null;
        localStorageService.setUser(user);
      }
    );
    builder.addMatcher<PayloadAction<IRegisterRes>>(
      userApi.endpoints.refresh.matchFulfilled,
      (state, { payload }) => {
        const user = getUserFromResponse(payload);
        state.user = user;
        state.error = null;
        localStorageService.setUser(user);
      }
    );
    builder.addMatcher<PayloadAction<ErrorType>>(
      userApi.endpoints.refresh.matchRejected,
      (state, { payload }) => {
        state.error = payload?.data?.error?.message;
        localStorageService.removeUser();
        state.user = initialState.user;
      }
    );
    builder.addMatcher(userApi.endpoints.updateProfile.matchFulfilled, (state, { payload }) => {
      state.user.name = payload.displayName;
      state.user.email = payload.email;
      state.error = null;

      localStorage.setItem("fullName", payload.displayName);
      localStorage.setItem("email", payload.email);
    });
  },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
export default userSlice;
