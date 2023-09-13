import { useState } from "react";
import { Radio } from "@/shared/ui/radio/radio";
import { ButtonEdit } from "@/shared/ui/button-edit";
import { ButtonOk } from "@/shared/ui/button-ok";
import { ConstructRadioEdit } from "./construct-radio-edit";
import { useConstructRadio } from "@/shared/hooks/useConstructRadio";
import { RADIO } from "./constants";
import cls from "./construct-radio.module.scss";

export const ConstructRadio = () => {
  const [edit, setEdit] = useState(false);

  const { radioFields, handleChecked, handleEdit, handleDelete, handleAddElement } =
    useConstructRadio(RADIO);

  return (
    <div className={cls.radio} data-testid="construct-radio">
      <ul>
        {radioFields.map(radio => (
          <li key={radio.id}>
            <Radio radio={radio} onChecked={handleChecked} />
          </li>
        ))}
      </ul>

      {edit && (
        <ConstructRadioEdit
          fields={radioFields}
          onChange={handleEdit}
          onDelete={handleDelete}
          onAddElement={handleAddElement}
        />
      )}

      {edit ? (
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
