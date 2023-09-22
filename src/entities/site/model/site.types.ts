import { CSSProperties } from "react";

export interface ISite {
  authorId: string;
  bg: CSSProperties["backgroundColor"];
  elements: SiteElement[];
  id: string;
  name: string;
  updatedAt: number;
  forkCount: number;
}

export interface SiteElement {
  content: string;
  id: string;
  path: string;
  width: number;
  height: number;
  url?: string;
  position: {
    top: number;
    left: number;
  };
}
