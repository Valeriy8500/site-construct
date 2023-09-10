import { SortType } from "@/features/sort";
import { ISite } from "@/entities/site/model/site.types.ts";

export const sortSites = (sort: SortType, sites: ISite[]) => {
  switch (sort) {
    case "NAME.ASK":
      return sites.sort((a, b) => (a.name > b.name ? 1 : -1));

    case "NAME.DESC":
      return sites.sort((a, b) => (a.name > b.name ? -1 : 1));

    case "DATE.ASK":
      return sites.sort((a, b) => b.updatedAt - a.updatedAt);

    case "DATE.DESC":
      return sites.sort((a, b) => a.updatedAt - b.updatedAt);
  }
};
