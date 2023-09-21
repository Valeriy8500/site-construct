import { useState, ChangeEvent, useEffect } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { IRadioField } from "@/features/construct-components/construct-radio/types";
import { useAppDispatch } from "./redux-hooks";
import { updateFormData } from "@/entities/construct-form";

export const useConstructRadio = (initFields: IRadioField[], id: string) => {
  const dispatch = useAppDispatch();
  const [radioFields, setRadioFields] = useState<IRadioField[]>(initFields);

  useEffect(() => {
    dispatch(
      updateFormData({
        id: id,
        label: "Radio",
        value: radioFields.filter(item => item.isChecked)[0].label,
      })
    );
  }, [radioFields]);

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
