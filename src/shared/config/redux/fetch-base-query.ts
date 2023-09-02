import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL: string = "https://identitytoolkit.googleapis.com/v1/";

export const rtkFetchBaseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: headers => {
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    headers.append("Authorization", `Bearer ${localStorage.getItem("accessToken") || ""}`);
    return headers;
  },
  credentials: "include",
});
