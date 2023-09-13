import { FC } from "react";
import { ConstructTextareaEditProps } from "./types";
import { InputEdit } from "@/shared/ui/input-edit";
import cls from "./construct-textarea.module.scss";

export const ConstructTextareaEdit: FC<ConstructTextareaEditProps> = ({ value, onEdit }) => {
  return (
    <div className={cls.edit}>
      <p className={cls.edit__title}>Редактирование полей textarea</p>
      <div className={cls.edit__item}>
        <p>Label</p>
        <InputEdit name="label" value={value.label} onChange={onEdit} />
      </div>
      <div className={cls.edit__item}>
        <p>Placeholder</p>
        <InputEdit name="placeholder" value={value.placeholder} onChange={onEdit} />
      </div>
      <div className={cls.edit__item}>
        <p>Rows</p>
        <InputEdit name="rows" value={value.rows} onChange={onEdit} />
      </div>
    </div>
  );
};
