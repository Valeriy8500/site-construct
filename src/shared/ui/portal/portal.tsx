import { createPortal } from "react-dom";
import React from "react";
import { usePortal } from "./use-portal";

interface PortalProps {
  id: string;
  children: React.ReactNode;
}

export const Portal = (props: PortalProps) => {
  const { id, children } = props;
  const target = usePortal(id);
  if (target) return createPortal(children, target, id);
  return <></>;
};
