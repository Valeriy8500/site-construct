import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUserState } from "./user.types";
import { userApi } from "../api/user.api";
import { IRegisterRes } from "../api/user.api.types";

type ErrorType = {
  data: { error: { message: string } };
};

const initialState: IUserState = {
  userId: "",
  email: "",
  name: "",
  registered: false,
  error: null,
  accessToken: "",
  refreshToken: "",
  expires: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout(state) {
      state.registered = false;
      state.error = null;
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("expiresIn");
      localStorage.removeItem("fullName");
      localStorage.removeItem("email");
    },
  },
  extraReducers: builder => {
    builder.addMatcher(userApi.endpoints.login.matchFulfilled, (state, { payload }) => {
      state.userId = payload.idToken;
      state.name = payload.displayName;
      state.registered = true;
      state.email = payload.email;
      state.accessToken = payload.idToken;
      state.refreshToken = payload.refreshToken;
      state.expires = payload.expiresIn;
      state.error = null;
      localStorage.setItem("accessToken", payload.idToken);
      localStorage.setItem("refreshToken", payload.refreshToken);
      localStorage.setItem("expiresIn", payload.expiresIn);
      localStorage.setItem("fullName", payload.displayName);
      localStorage.setItem("email", payload.email);
    });

    builder.addMatcher<PayloadAction<ErrorType>>(
      userApi.endpoints.login.matchRejected,
      (state, { payload }) => {
        state.error = payload.data.error.message;
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("expiresIn");
        localStorage.removeItem("fullName");
        localStorage.removeItem("email");
      }
    );
    //регистрация
    builder.addMatcher<PayloadAction<ErrorType>>(
      userApi.endpoints.register.matchRejected,
      (state, { payload }) => {
        state.error = payload.data.error.message;
        console.log(payload);
      }
    );
    builder.addMatcher<PayloadAction<IRegisterRes>>(
      userApi.endpoints.register.matchFulfilled,
      (state, { payload }) => {
        state.userId = payload.idToken;
        state.name = payload.displayName;
        state.registered = true;
        state.email = payload.email;
        state.accessToken = payload.idToken;
        state.refreshToken = payload.refreshToken;
        state.expires = payload.expiresIn;
        state.error = null;

        localStorage.setItem("accessToken", payload.idToken);
        localStorage.setItem("refreshToken", payload.refreshToken);
        localStorage.setItem("expiresIn", payload.expiresIn);
        localStorage.setItem("fullName", payload.displayName);
        localStorage.setItem("email", payload.email);
      }
    );
    builder.addMatcher(
      userApi.endpoints.updateProfile.matchFulfilled,
      (state, { payload }) => {
        state.name = payload.displayName;
        state.registered = true;
        state.email = payload.email;
        state.error = null;

        localStorage.setItem("fullName", payload.displayName);
        localStorage.setItem("email", payload.email);
      });
  },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
