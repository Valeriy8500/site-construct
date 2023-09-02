import React, { useCallback, useRef, useEffect } from "react";

export const useTimeout = (callback: () => void, delay: number) => {
  const callbackRef = useRef(callback);
  const timeoutRef: React.MutableRefObject<any> = useRef();

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const set = useCallback(() => {
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
  }, [delay]);

  const clear = useCallback(() => {
    if (timeoutRef.current) {
      clearInterval(timeoutRef.current);
    }
  }, []);

  useEffect(() => {
    set();

    return clear;
  }, [delay, set, clear]);

  const reset = useCallback(() => {
    clear();
    set();
  }, [clear, set]);

  return { reset, clear };
};
