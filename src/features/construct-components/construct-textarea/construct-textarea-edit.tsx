import { FC } from "react";
import { ConstructTextareaEditProps } from "./types";
import cls from "./construct-textarea.module.scss";

export const ConstructTextareaEdit: FC<ConstructTextareaEditProps> = ({ value, onEdit }) => {
  return (
    <div className={cls.edit}>
      <p className={cls.edit__title}>Редактирование полей textarea</p>
      <div className={cls.edit__item}>
        <p>Label</p>
        <input name="label" type="text" value={value.label} onChange={e => onEdit(e)} />
      </div>
      <div className={cls.edit__item}>
        <p>Placeholder</p>
        <input name="placeholder" type="text" value={value.placeholder} onChange={e => onEdit(e)} />
      </div>
      <div className={cls.edit__item}>
        <p>Rows</p>
        <input name="rows" type="text" value={value.rows} onChange={e => onEdit(e)} />
      </div>
    </div>
  );
};
