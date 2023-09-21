import { ChangeEvent, useEffect, useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { ICheckbox } from "./construct-checkbox.types";
import { useAppDispatch } from "@/shared/hooks/redux-hooks";
import { updateFormData } from "@/entities/construct-form";

export const useConstructCheckbox = (initFields: ICheckbox[], id: string) => {
  const dispatch = useAppDispatch();
  const [checkboxFields, setCheckboxFields] = useState<ICheckbox[]>(initFields);

  useEffect(() => {
    dispatch(
      updateFormData({
        id: id,
        label: "Checked",
        value: checkboxFields
          .filter(item => item.isChecked)
          .reduce((acc, item) => acc + item.label + ", ", "")
          .slice(0, -2),
      })
    );
  }, [checkboxFields]);

  const handleChecked = (id: string) => {
    setCheckboxFields(prev =>
      prev.map(item => (item.id === id ? { ...item, isChecked: !item.isChecked } : item))
    );
  };

  const handleEdit = (e: ChangeEvent<HTMLInputElement>) => {
    setCheckboxFields(prev =>
      prev.map(p => (p.id === e.target.id ? { ...p, label: e.target.value } : p))
    );
  };

  const handleDelete = (id: string) => {
    setCheckboxFields(prev => prev.filter(p => p.id !== id));
  };

  const handleAddElement = () => {
    setCheckboxFields([
      ...checkboxFields,
      { id: nanoid(), label: "New checkbox", isChecked: false },
    ]);
  };

  return { checkboxFields, handleEdit, handleDelete, handleAddElement, handleChecked };
};
