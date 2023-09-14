import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  ILoginReq,
  ILoginRes,
  IRegisterReq,
  IRegisterRes,
  IUserProfileReq,
  IUserProfileRes,
} from "./user.api.types";
import { ErrorType } from "../model/user.types";

export const userApi = createApi({
  reducerPath: "userApi",
  tagTypes: ["User"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://identitytoolkit.googleapis.com/v1/",
  }),
  endpoints: build => ({
    login: build.mutation<ILoginRes, ILoginReq>({
      query: obj => ({
        url: `accounts:signInWithPassword?key=${import.meta.env.VITE_FIREBASE_KEY}`,
        method: "POST",
        body: obj,
      }),
      invalidatesTags: ["User"],
    }),
    register: build.mutation<IRegisterRes | ErrorType, IRegisterReq>({
      query: obj => ({
        url: `accounts:signUp?key=${import.meta.env.VITE_FIREBASE_KEY}`,
        method: "POST",
        body: obj,
      }),
      invalidatesTags: ["User"],
    }),
    updateProfile: build.mutation<IUserProfileRes, IUserProfileReq>({
      query: obj => ({
        url: `accounts:update?key=${import.meta.env.VITE_FIREBASE_KEY}`,
        method: "POST",
        body: obj,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useUpdateProfileMutation } = userApi;
