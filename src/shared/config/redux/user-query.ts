import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL: string = "https://identitytoolkit.googleapis.com/v1/";

export const userQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
});
