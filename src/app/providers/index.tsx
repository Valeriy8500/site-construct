import { ErrorBoundary } from "./error-boundary";
import React, { ReactNode } from "react";

interface IProvidersProps {
  className?: string;
  children: ReactNode;
}

export const Providers = (props: IProvidersProps) => {
  const { className, children } = props;

  return (
    <React.StrictMode>
      <ErrorBoundary>
        {children}
      </ErrorBoundary>
    </React.StrictMode>
  );
};