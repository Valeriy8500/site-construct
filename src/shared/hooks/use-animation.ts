import {
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

interface IUseAnimationProps {
  onExit?: () => void;
  isEnter?: boolean;
  delay: number;
}

export const useAnimations = (props: IUseAnimationProps) => {
  const { delay, isEnter, onExit } = props
  const [isExiting, setIsExiting] = useState(false);
  const [isEntering, setIsEntering] = useState(false);
  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (isEnter) {
      setIsEntering(true);
      timerRef.current = setTimeout(() => {
        setIsEntering(false);
      }, delay);
    }
  }, [isEnter]);

  const exit = useCallback(() => {
    if (onExit) {
      setIsExiting(true);
      timerRef.current = setTimeout(() => {
        onExit();
        setIsExiting(false);
      }, delay);
    }
  }, [delay, onExit]);

  useEffect(() => {
    return () => {
      clearTimeout(timerRef.current);
    };
  }, [isEnter]);

  return {
    exiting: isExiting,
    entering: isEntering,
    entered: !isEntering && isEnter,
    exited: !isEnter || isEntering,
    exit,
  };
}
