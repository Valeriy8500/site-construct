import { CSSProperties } from "react";
import { ISite } from "@/entities/site/model/site.types.ts";

export type GetSitesData = ISite[];

export interface GetSitesRes {
  [key: string]: SiteFirebase;
}

export interface SiteFirebase {
  authorId: string;
  bg: CSSProperties["backgroundColor"];
  elements: {
    [key: string]: {
      content: string;
      id: string;
      path: string;
      width: number;
      height: number;
      position: {
        top: number;
        left: number;
      };
    };
  };
  id: string;
  name: string;
  updatedAt: number;
}
