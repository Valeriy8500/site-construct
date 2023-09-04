import { useEffect } from "react";
import { useTimeout } from "@/shared/hooks/useTimeout.ts";

export const useDebounce = (
  callback: () => void,
  delay: number,
  dependencies: number[] | string[]
) => {
  const { reset, clear } = useTimeout(callback, delay);

  useEffect(reset, [...dependencies, reset]);
  useEffect(clear, []);
};
