import { useState, ChangeEvent, FC } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { IRadioField } from "@/features/construct-components/construct-radio/types";

export const useConstructRadio = (initFields: IRadioField[]) => {
  const [radioFields, setRadioFields] = useState<IRadioField[]>(initFields);

  const handleChecked = (e: ChangeEvent<HTMLInputElement>) => {
    setRadioFields(prev =>
      prev.map(item =>
        item.id === e.target.id ? { ...item, isChecked: true } : { ...item, isChecked: false }
      )
    );
  };

  const handleEdit = (e: ChangeEvent<HTMLInputElement>) => {
    setRadioFields(prev =>
      prev.map(p => (p.id === e.target.id ? { ...p, label: e.target.value } : p))
    );
  };

  const handleDelete = (id: string) => {
    setRadioFields(prev => prev.filter(p => p.id !== id));
  };

  const handleAddElement = () => {
    setRadioFields([...radioFields, { id: nanoid(), label: "New", isChecked: false }]);
  };
  return { radioFields, handleChecked, handleEdit, handleDelete, handleAddElement };
};
