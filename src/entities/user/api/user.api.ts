import { createApi } from "@reduxjs/toolkit/query/react";
import { rtkFetchBaseQuery } from "@/shared/config/redux/fetch-base-query";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: rtkFetchBaseQuery,
  endpoints: build => ({
    login: build.mutation<void, void>({
      query: obj => ({
        url: `/login`,
        method: "POST",
        body: obj,
      }),
    }),
  }),
});

export const { useLoginMutation } = userApi;
