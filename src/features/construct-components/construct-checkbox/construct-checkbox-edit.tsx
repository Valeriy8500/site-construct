import { FC } from "react";
import { ConstructCheckboxEditProps } from "./types";
import { ButtonDelete } from "@/shared/ui/button-delete";
import { ButtonAdd } from "@/shared/ui/button-add";
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
            <input
              className={cls.edit_checkbox__input}
              id={field.id}
              type="text"
              value={field.label}
              onChange={e => onChange(e)}
            />
          </div>
        ))}
      </>
      <div className={cls.edit_checkbox__add_buton}>
        <ButtonAdd onClick={onAddElement} />
      </div>
    </div>
  );
};
