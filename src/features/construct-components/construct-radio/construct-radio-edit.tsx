import { FC } from "react";
import { ButtonDelete } from "@/shared/ui/button-delete";
import { ConstructRadioEditProps } from "./types";
import { ButtonAdd } from "@/shared/ui/button-add";
import cls from "./construct-radio.module.scss";

export const ConstructRadioEdit: FC<ConstructRadioEditProps> = ({
  fields,
  onChange,
  onDelete,
  onAddElement,
}) => {
  return (
    <div className={cls.edit_radio}>
      <p className={cls.edit_radio__title}>Редактирование полей radio input</p>
      <>
        {fields.map(field => (
          <div key={field.id} className={cls.edit_radio__item}>
            <ButtonDelete onClick={() => onDelete(field.id)} />
            <input
              className={cls.edit_radio__input}
              id={field.id}
              type="text"
              value={field.label}
              onChange={e => onChange(e)}
            />
          </div>
        ))}
      </>
      <div className={cls.edit_radio__add_buton}>
        <ButtonAdd onClick={onAddElement} />
      </div>
    </div>
  );
};
