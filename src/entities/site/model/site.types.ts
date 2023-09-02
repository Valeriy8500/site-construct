import { CSSProperties } from "react";

export interface Site {
  id: string;
  name: string;
  bg: CSSProperties["backgroundColor"];
  authorId: string;
  create: number;
}
