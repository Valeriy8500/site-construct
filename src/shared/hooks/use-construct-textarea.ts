import { ChangeEvent, useState } from "react";
import { ITextarea } from "@/features/construct-components/construct-textarea/types";

export const useConstructTextarea = (valueInit: ITextarea) => {
  const [value, setValue] = useState(valueInit);

  const handleEdit = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return { value, handleEdit };
};
