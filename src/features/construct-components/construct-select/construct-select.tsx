import { useState } from "react";
import { MySelect } from "@/shared/ui/select/select";
import { ButtonOk } from "@/shared/ui/button-ok";
import { ButtonEdit } from "@/shared/ui/button-edit";
import { SelectEdit } from "./select-edit";
import { useConstructSelect } from "@/shared/hooks/use-construct-select";
import { SELECT_INIT_OPTIONS } from "./constants";
import cls from "./construct-select.module.scss";

export const ConstructSelect = () => {
  const [isEdit, setEdit] = useState(false);

  const { optionsFields, handleChange, handleAddElement, handleDelete } =
    useConstructSelect(SELECT_INIT_OPTIONS);

  return (
    <div className={cls.select} data-testid="construct-select">
      <MySelect options={optionsFields} />

      {isEdit && (
        <SelectEdit
          options={optionsFields}
          onEditChange={handleChange}
          onEditDelete={handleDelete}
          onAddElement={handleAddElement}
        />
      )}

      {isEdit ? (
        <div className={cls.select__ok_button}>
          <ButtonOk onClick={() => setEdit(false)} />
        </div>
      ) : (
        <div className={cls.select__edit_button}>
          <ButtonEdit onClick={() => setEdit(true)} />
        </div>
      )}
    </div>
  );
};
