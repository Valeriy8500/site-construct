import React, { ReactNode } from "react";
import { ErrorBoundary } from "./error-boundary";

interface IProvidersProps {
  className?: string;
  children: ReactNode;
}

export const Providers = (props: IProvidersProps) => {
  const { children } = props;

  return (
    <React.StrictMode>
      <ErrorBoundary>{children}</ErrorBoundary>
    </React.StrictMode>
  );
};
