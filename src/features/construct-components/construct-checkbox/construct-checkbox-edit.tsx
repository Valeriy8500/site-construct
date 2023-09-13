import { FC } from "react";
import { ConstructCheckboxEditProps } from "./types";
import { ButtonDelete } from "@/shared/ui/button-delete";
import { ButtonAdd } from "@/shared/ui/button-add";
import { InputEdit } from "@/shared/ui/input-edit";
import cls from "./construct-checkbox.module.scss";

export const ConstructCheckboxEdit: FC<ConstructCheckboxEditProps> = ({
  fields,
  onChange,
  onDelete,
  onAddElement,
}) => {
  return (
    <div className={cls.edit_checkbox}>
      <p className={cls.edit_checkbox__title}>Редактирование полей checkbox</p>
      <>
        {fields.map(field => (
          <div key={field.id} className={cls.edit_checkbox__item}>
            <ButtonDelete onClick={() => onDelete(field.id)} />
            <InputEdit id={field.id} value={field.label} onChange={onChange} />
          </div>
        ))}
      </>
      <div className={cls.edit_checkbox__add_buton}>
        <ButtonAdd onClick={onAddElement} />
      </div>
    </div>
  );
};
