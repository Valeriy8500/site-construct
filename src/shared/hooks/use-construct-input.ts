import { ChangeEvent, useState } from "react";
import { IInput } from "@/features/construct-components/construct-input/types";

export const useConstructInput = (valueInit: IInput) => {
  const [value, setValue] = useState(valueInit);

  const handleEdit = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return { value, handleEdit };
};
