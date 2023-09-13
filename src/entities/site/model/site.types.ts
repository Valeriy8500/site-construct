import { CSSProperties, ReactNode } from "react";

export interface ISite {
  id: string;
  url: string;
  name: string;
  authorId: string;
  updatedAt: number;
  elements: SiteElement[];
  bg: CSSProperties["backgroundColor"];
  html: string;
  css: string;
  content: ISiteContent[];
}

export interface SiteElement {
  id: string;
  content: string;
  width: number;
  height: number;
}

export interface ISiteContent {
  Element: ReactNode;
  id: string;
}
