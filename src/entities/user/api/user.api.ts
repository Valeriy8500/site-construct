import { createApi } from "@reduxjs/toolkit/query/react";
import { ILoginReq, ILoginRes, IRegisterReq, IRegisterRes } from "./user.api.types";
import { ErrorType } from "../model/user.types";
import { rtkFetchBaseQuery } from "@/shared/config/redux/fetch-base-query";

export const userApi = createApi({
  reducerPath: "userApi",
  tagTypes: ["User"],
  baseQuery: rtkFetchBaseQuery,
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
  }),
});

export const { useLoginMutation, useRegisterMutation } = userApi;
