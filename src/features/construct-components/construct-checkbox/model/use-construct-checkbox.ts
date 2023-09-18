import { ChangeEvent, useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { ICheckbox } from "./construct-checkbox.types";

export const useConstructCheckbox = (initFields: ICheckbox[]) => {
  const [checkboxFields, setCheckboxFields] = useState<ICheckbox[]>(initFields);

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
