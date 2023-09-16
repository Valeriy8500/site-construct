import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { toast } from "react-toastify";
import { baseQueryWithResult } from "@/shared/config/redux/fetch-base-query";
import { localStorageService } from "@/shared/services/localStorage.service";
import { GetSitesData, GetSitesRes } from "./site.api.types";
import { ISite } from "../model/site.types";
import { clearSiteElements } from "@/entities/site/model/site.selectors";

export const siteApi = createApi({
  reducerPath: "siteApi",
  tagTypes: ["getSites"],
  baseQuery: baseQueryWithResult,
  endpoints: build => ({
    getSites: build.query<GetSitesData, void>({
      query: () => ({
        url: `sites.json`,
        params: {
          key: import.meta.env.VITE_FIREBASE_KEY,
          auth: localStorageService.getAccessToken(),
        },
      }),
      transformResponse(res: GetSitesRes): GetSitesData {
        return Object.keys(res).map(key => ({
          ...res[key],
          elements: Object.keys(res[key].elements).map(elKey => res[key].elements[elKey]),
        }));
      },
      providesTags: ["getSites"],
    }),
    saveSite: build.mutation<{ id: string }, ISite>({
      query: body => ({
        url: `sites/${body.id}.json`,
        params: {
          key: import.meta.env.VITE_FIREBASE_KEY,
          auth: localStorageService.getAccessToken(),
        },
        method: "PUT",
        body: {
          ...body,
          elements: body.elements.reduce((acc, el) => Object.assign(acc, { [el.id]: el }), {}),
        },
      }),
      onQueryStarted({ name }, api): Promise<void> | void {
        api.queryFulfilled.then(() => {
          toast.success(`Сайт ${name} успешно сохранен`);
          api.dispatch(clearSiteElements());
        });
      },
      invalidatesTags: ["getSites"],
    }),
  }),
});

export const { useGetSitesQuery, useSaveSiteMutation } = siteApi;
