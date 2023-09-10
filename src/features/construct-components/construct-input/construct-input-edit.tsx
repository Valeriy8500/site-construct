import { FC } from "react";
import { ConstructInputEditProps } from "./types";
import cls from "./construct-input.module.scss";

export const ConstructInputEdit: FC<ConstructInputEditProps> = ({ value, onEdit }) => {
  return (
    <div className={cls.edit}>
      <p className={cls.edit__title}>Редактирование полей input</p>
      <div className={cls.edit__item}>
        <p>Label</p>
        <input name="label" type="text" value={value.label} onChange={e => onEdit(e)} />
      </div>
      <div className={cls.edit__item}>
        <p>Placeholder</p>
        <input name="placeholder" type="text" value={value.placeholder} onChange={e => onEdit(e)} />
      </div>
    </div>
  );
};
