import { FC } from "react";
import { ConstructInputEditProps } from "./types";
import { InputEdit } from "@/shared/ui/input-edit";
import cls from "./construct-input.module.scss";

export const ConstructInputEdit: FC<ConstructInputEditProps> = ({ value, onEdit }) => {
  return (
    <div className={cls.edit}>
      <p className={cls.edit__title}>Редактирование полей input</p>
      <div className={cls.edit__item}>
        <p>Label</p>
        <InputEdit name="label" value={value.label} onChange={onEdit} />
      </div>
      <div className={cls.edit__item}>
        <p>Placeholder</p>
        <InputEdit name="placeholder" value={value.placeholder} onChange={onEdit} />
      </div>
    </div>
  );
};
