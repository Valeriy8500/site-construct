import { Checkbox } from "@/shared/ui/checkbox";
import { ConstructCheckboxEdit } from "./construct-checkbox-edit";
import { CHECKBOX_INIT } from "../model/construct-checkbox.constants";
import cls from "./construct-checkbox.module.scss";
import { useConstructCheckbox } from "../model/use-construct-checkbox";
import { SiteElement } from "@/entities/site/model/site.types";

interface ConstructCheckboxProps {
  edit: boolean;
  content: string;
  width?: number;
  height?: number;
  position?: SiteElement["position"];
}

export const ConstructCheckbox = ({ edit, position, width, height }: ConstructCheckboxProps) => {
  const { checkboxFields, handleEdit, handleDelete, handleAddElement, handleChecked } =
    useConstructCheckbox(CHECKBOX_INIT);

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
