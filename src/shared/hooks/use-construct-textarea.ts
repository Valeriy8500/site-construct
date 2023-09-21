import { ChangeEvent, useEffect, useState } from "react";
import { ITextarea } from "@/features/construct-components/construct-textarea/types";
import { useAppDispatch } from "./redux-hooks";
import { updateFormData } from "@/entities/construct-form";

export const useConstructTextarea = (valueInit: ITextarea, id: string) => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState(valueInit);

  useEffect(() => {
    dispatch(updateFormData({ id: id, label: value.label, value: value.textarea }));
  }, [value]);

  const handleEdit = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return { value, handleEdit };
};
