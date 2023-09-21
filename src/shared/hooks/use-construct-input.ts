import { ChangeEvent, useEffect, useState } from "react";
import { IInput } from "@/features/construct-components/construct-input/types";
import { useAppDispatch } from "./redux-hooks";
import { updateFormData } from "@/entities/construct-form";

export const useConstructInput = (valueInit: IInput, id: string) => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState(valueInit);

  useEffect(() => {
    dispatch(updateFormData({ id: id, label: value.label, value: value.input }));
  }, [value]);

  const handleEdit = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return { value, handleEdit };
};
