import { CSSProperties } from "react";

export interface ISite {
  id: string;
  url: string;
  name: string;
  authorId: string;
  updatedAt: number;
  bg: CSSProperties["backgroundColor"];
  html: string;
  css: string;
}
