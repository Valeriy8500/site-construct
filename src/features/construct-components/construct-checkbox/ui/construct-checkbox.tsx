import { FC } from "react";
import { Checkbox } from "@/shared/ui/checkbox";
import { ConstructCheckboxEdit } from "./construct-checkbox-edit";
import { CHECKBOX_INIT } from "../model/construct-checkbox.constants";
import { useConstructCheckbox } from "../model/use-construct-checkbox";
import { SiteElement } from "@/entities/site/model/site.types";
import cls from "./construct-checkbox.module.scss";

interface ConstructCheckboxProps {
  edit: boolean;
  id: string;
  width?: number;
  height?: number;
  position?: SiteElement["position"];
}
export const ConstructCheckbox: FC<ConstructCheckboxProps> = ({
  edit,
  id,
  position,
  width,
  height,
}) => {
  const { checkboxFields, handleEdit, handleDelete, handleAddElement, handleChecked } =
    useConstructCheckbox(CHECKBOX_INIT, id);

  return (
    <div
      className={cls.checkbox}
      style={{ top: position?.top, left: position?.left, width, height }}
      data-testid="construct-checkbox"
    >
      <ul>
        {checkboxFields.map(item => (
          <li key={item.id}>
            <Checkbox field={item} onChecked={handleChecked} />
          </li>
        ))}
      </ul>

      {edit && (
        <ConstructCheckboxEdit
          fields={checkboxFields}
          onChange={handleEdit}
          onDelete={handleDelete}
          onAddElement={handleAddElement}
        />
      )}
    </div>
  );
};
