import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { toast } from "react-toastify";
import { baseQueryWithResult } from "@/shared/config/redux/fetch-base-query";
import { localStorageService } from "@/shared/services/localStorage.service";
import { GetSitesData, GetSitesRes, SiteFirebase, GetSitesReq } from "./site.api.types";
import { ISite } from "../model/site.types";
import { clearSiteElements } from "@/entities/site/model/site.selectors";

export const siteApi = createApi({
  reducerPath: "siteApi",
  tagTypes: ["getSites", "getSiteById"],
  baseQuery: baseQueryWithResult,
  endpoints: build => ({
    getSites: build.query<GetSitesData, GetSitesReq>({
      query: ({ startAt, limitToFirst }) => ({
        url: `sites.json`,
        params: {
          key: import.meta.env.VITE_FIREBASE_KEY,
          auth: localStorageService.getAccessToken(),
          orderBy: '"id"',
          limitToFirst,
          startAt: `"${startAt}"`,
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
    getSiteById: build.query<ISite, string>({
      query: id => ({
        url: `sites/${id}.json`,
        params: {
          key: import.meta.env.VITE_FIREBASE_KEY,
          auth: localStorageService.getAccessToken(),
        },
        cache: "no-cache",
      }),
      transformResponse(res: SiteFirebase): ISite {
        return {
          ...res,
          elements: Object.keys(res.elements).map(elKey => res.elements[elKey]),
        };
      },
      providesTags: ["getSiteById"],
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
      invalidatesTags: ["getSites", "getSiteById"],
    }),
    deleteSite: build.mutation<{ id: string }, string>({
      query: id => ({
        url: `sites/${id}.json`,
        params: {
          key: import.meta.env.VITE_FIREBASE_KEY,
          auth: localStorageService.getAccessToken(),
        },
        method: "DELETE",
      }),
      onQueryStarted(_, api): Promise<void> | void {
        api.queryFulfilled.then(() => {
          toast.success(`Сайт успешно удален!`);
          api.dispatch(clearSiteElements());
        });
      },
      invalidatesTags: ["getSites", "getSiteById"],
    }),
  }),
});

export const { useGetSitesQuery, useSaveSiteMutation, useGetSiteByIdQuery, useDeleteSiteMutation } =
  siteApi;
