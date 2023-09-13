import { useState } from "react";
import { Checkbox } from "@/shared/ui/checkbox";
import { useConstructCheckbox } from "@/shared/hooks/useConstructCheckbox";
import { ButtonOk } from "@/shared/ui/button-ok";
import { ButtonEdit } from "@/shared/ui/button-edit";
import { ConstructCheckboxEdit } from "./construct-checkbox-edit";
import { CHECKBOX_INIT } from "./constants";
import cls from "./construct-checkbox.module.scss";

export const ConstructCheckbox = () => {
  const [isEdit, setEdit] = useState(false);

  const { checkboxFields, handleEdit, handleDelete, handleAddElement, handleChecked } =
    useConstructCheckbox(CHECKBOX_INIT);

  return (
    <div className={cls.checkbox} data-testid="construct-checkbox">
      <ul>
        {checkboxFields.map(item => (
          <li key={item.id}>
            <Checkbox field={item} onChecked={handleChecked} />
          </li>
        ))}
      </ul>

      {isEdit && (
        <ConstructCheckboxEdit
          fields={checkboxFields}
          onChange={handleEdit}
          onDelete={handleDelete}
          onAddElement={handleAddElement}
        />
      )}

      {isEdit ? (
        <div className={cls.button_ok}>
          <ButtonOk onClick={() => setEdit(false)} />
        </div>
      ) : (
        <div className={cls.button_edit}>
          <ButtonEdit onClick={() => setEdit(true)} />
        </div>
      )}
    </div>
  );
};
