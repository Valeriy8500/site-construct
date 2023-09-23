import { createApi } from "@reduxjs/toolkit/query/react";
import {
  ErrorData,
  ILoginReq,
  ILoginRes,
  IRegisterReq,
  IRegisterRes,
  IResetPasswordReq,
  IUserProfileReq,
  IUserProfileRes,
  RefreshRes,
} from "./user.api.types";
import { ErrorType } from "../model/user.types";
import { localStorageService } from "@/shared/services/localStorage.service.ts";
import { authBaseQuery } from "@/shared/config/redux/fetch-base-query.ts";

export const userApi = createApi({
  reducerPath: "userApi",
  tagTypes: ["User"],
  baseQuery: authBaseQuery,
  endpoints: build => ({
    login: build.mutation<ILoginRes, ILoginReq>({
      query: obj => ({
        url: `accounts:signInWithPassword?key=${import.meta.env.VITE_FIREBASE_KEY}`,
        method: "POST",
        body: obj,
        cache: "no-cache",
      }),
      invalidatesTags: ["User"],
    }),
    register: build.mutation<IRegisterRes | ErrorType, IRegisterReq>({
      query: obj => ({
        url: `accounts:signUp?key=${import.meta.env.VITE_FIREBASE_KEY}`,
        method: "POST",
        body: obj,
        cache: "no-cache",
      }),
      invalidatesTags: ["User"],
    }),
    updateProfile: build.mutation<IUserProfileRes, IUserProfileReq>({
      query: obj => ({
        url: `accounts:update?key=${import.meta.env.VITE_FIREBASE_KEY}`,
        method: "POST",
        body: obj,
        cache: "no-cache",
      }),
      invalidatesTags: ["User"],
    }),
    resetPassword: build.mutation<IRegisterRes | ErrorData, IResetPasswordReq>({
      query: obj => ({
        url: `accounts:sendOobCode?key=${import.meta.env.VITE_FIREBASE_KEY}`,
        method: "POST",
        body: obj,
      }),
      invalidatesTags: ["User"],
    }),
    refresh: build.mutation<RefreshRes | ErrorType, void>({
      query: () => ({
        url: `token?key=${import.meta.env.VITE_FIREBASE_KEY}`,
        method: "POST",
        body: {
          grant_type: "refresh_token",
          refresh_token: localStorageService.getRefreshToken(),
        },
        cache: "no-cache",
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useUpdateProfileMutation,
  useResetPasswordMutation,
} = userApi;
