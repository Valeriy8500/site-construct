import { ChangeEvent, useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { ISelectOption } from "@/features/construct-components/construct-select/types";

export const useConstructSelect = (initFields: ISelectOption[]) => {
  const [optionsFields, setOptionsFields] = useState<ISelectOption[]>(initFields);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setOptionsFields(prev =>
      prev.map(p =>
        p.id === e.target.id ? { ...p, value: e.target.value, label: e.target.value } : p
      )
    );
  };

  const handleAddElement = () => {
    setOptionsFields(prev => [...prev, { id: nanoid(), value: "new", label: "new" }]);
  };

  const handleDelete = (id: string) => {
    setOptionsFields(prev => prev.filter(p => p.id !== id));
  };
  return { optionsFields, handleChange, handleAddElement, handleDelete };
};
