import {fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const BASE_URL: string = "https://redux-toolkit.js.org/rtk-query/api/fetchBaseQuery";

export const rtkFetchBaseQuery = fetchBaseQuery(
    {
        baseUrl: BASE_URL,
        prepareHeaders: (headers) => {
            headers.append("Content-Type", "application/json");
            headers.append("Accept", "application/json");
            headers.append(
                "Authorization",
                `Bearer ${localStorage.getItem("access_token") || ""}`
            );
            return headers;
        },
        credentials: "include",
    }
)
