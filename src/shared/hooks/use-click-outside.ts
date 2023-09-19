import { RefObject, useEffect } from "react";

export const useClickOutside = (
  iconRef: RefObject<HTMLElement>,
  navRef: RefObject<HTMLElement>,
  calback: () => void
) => {
  const handleMouse = (e: any) => {
    if (
      iconRef.current &&
      navRef.current &&
      !iconRef.current.contains(e.target) &&
      !navRef.current.contains(e.target)
    ) {
      calback();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleMouse);
    return () => document.removeEventListener("mousedown", handleMouse);
  });
};
