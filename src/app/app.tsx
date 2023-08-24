import React, { useLayoutEffect } from "react";
import "./styles/index.scss";
import { Providers } from "./providers";
import { Main } from "@/pages/main";

export const App = () => {
  return (
    <Providers>
      <Main />
    </Providers>
  );
};

