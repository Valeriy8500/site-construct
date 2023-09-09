import { CSSProperties, ReactNode } from "react";

export interface ISite {
  id: string;
  url: string;
  name: string;
  authorId: string;
  updatedAt: number;
  bg: CSSProperties["backgroundColor"];
  html: string;
  css: string;
  content: ISiteContent[];
}

export interface ISiteContent {
  Element: ReactNode;
  id: string;
}
