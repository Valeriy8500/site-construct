import { ChangeEvent, FC } from "react";
import { ISelectOption } from "./types";
import { ButtonDelete } from "@/shared/ui/button-delete";
import { ButtonAdd } from "@/shared/ui/button-add";
import { InputEdit } from "@/shared/ui/input-edit";
import cls from "./construct-select.module.scss";

interface SelectEditProps {
  options: ISelectOption[];
  onEditChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onEditDelete: (id: string) => void;
  onAddElement: () => void;
}

export const SelectEdit: FC<SelectEditProps> = ({
  options,
  onEditDelete,
  onEditChange,
  onAddElement,
}) => {
  return (
    <div className={cls.select_edit}>
      <p className={cls.select_edit__title}>Редактирование полей select</p>
      <>
        {options.map(option => (
          <div key={option.id} className={cls.select_edit__item}>
            <ButtonDelete onClick={() => onEditDelete(option.id)} />
            <InputEdit id={option.id} value={option.value} onChange={e => onEditChange(e)} />
          </div>
        ))}
      </>
      <div className={cls.select_edit__add_buton}>
        <ButtonAdd onClick={onAddElement} />
      </div>
    </div>
  );
};
