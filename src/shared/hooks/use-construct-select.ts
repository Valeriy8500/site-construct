import { ChangeEvent, useEffect, useState } from "react";
import { SingleValue } from "react-select";
import { nanoid } from "@reduxjs/toolkit";
import { ISelectOption } from "@/features/construct-components/construct-select/types";
import { useAppDispatch } from "./redux-hooks";
import { updateFormData } from "@/entities/construct-form";

export const useConstructSelect = (initFields: ISelectOption[], id: string) => {
  const dispatch = useAppDispatch();
  const [optionsFields, setOptionsFields] = useState<ISelectOption[]>(initFields);
  const [selectedValue, setSelectedValue] = useState<SingleValue<ISelectOption>>(null);

  console.log("optionsFields", optionsFields);

  useEffect(() => {
    if (selectedValue) {
      dispatch(updateFormData({ id: id, label: "Select", value: selectedValue.value }));
    } else {
      dispatch(updateFormData({ id: id, label: "Select", value: "" }));
    }
  }, [selectedValue]);

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

  const handleSelect = (value: SingleValue<ISelectOption>) => {
    console.log(value);

    setSelectedValue(value);
  };
  return { optionsFields, handleChange, handleAddElement, handleDelete, handleSelect };
};
