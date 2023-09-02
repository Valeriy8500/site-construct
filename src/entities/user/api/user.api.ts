import { createApi } from "@reduxjs/toolkit/query/react";
import { userQuery } from "@/shared/config/redux/user-query";
import { ILoginReq, ILoginRes } from "./user.api.types";

export const userApi = createApi({
  reducerPath: "userApi",
  tagTypes: ["User"],
  baseQuery: userQuery,
  endpoints: build => ({
    login: build.mutation<ILoginRes, ILoginReq>({
      query: obj => ({
        url: `accounts:signInWithPassword?key=${import.meta.env.VITE_FIREBASE_KEY}`,
        method: "POST",
        body: obj,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useLoginMutation } = userApi;
