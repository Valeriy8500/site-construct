import React, { ReactNode } from "react";
import { ErrorBoundary } from "./error-boundary";
import { StoreProvider } from "./store-provider/store-provider";

interface IProvidersProps {
  className?: string;
  children: ReactNode;
}

export const Providers = (props: IProvidersProps) => {
  const { children } = props;

  return (
    <React.StrictMode>
      <ErrorBoundary>
        <StoreProvider>{children}</StoreProvider>
      </ErrorBoundary>
    </React.StrictMode>
  );
};
