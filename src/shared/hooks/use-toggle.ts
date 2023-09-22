import { useState } from "react";

export const useToggle = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const onTrue = () => {
    setToggle(true);
  };

  const onFalse = () => {
    setToggle(false);
  };

  const onToggle = () => {
    setToggle(prev => !prev);
  };

  return { toggle, onTrue, onFalse, onToggle };
};
