import { FC } from "react";
import { Radio } from "@/shared/ui/radio/radio";
import { ConstructRadioEdit } from "./construct-radio-edit";
import { useConstructRadio } from "@/shared/hooks/use-construct-radio";
import { RADIO } from "./constants";
import { SiteElement } from "@/entities/site/model/site.types";
import cls from "./construct-radio.module.scss";

interface ConstructRadioProps {
  edit: boolean;
  id: string;
  width?: number;
  height?: number;
  position?: SiteElement["position"];
}

export const ConstructRadio: FC<ConstructRadioProps> = ({ edit, id, position, height, width }) => {
  const { radioFields, handleChecked, handleEdit, handleDelete, handleAddElement } =
    useConstructRadio(RADIO, id);

  return (
    <div
      className={cls.radio}
      style={{ top: position?.top, left: position?.left, width, height }}
      data-testid="construct-radio"
    >
      <ul>
        {radioFields.map(radio => (
          <li key={radio.id}>
            <Radio radio={radio} onChecked={handleChecked} />
          </li>
        ))}
      </ul>

      {edit && (
        <ConstructRadioEdit
          fields={radioFields}
          onChange={handleEdit}
          onDelete={handleDelete}
          onAddElement={handleAddElement}
        />
      )}
    </div>
  );
};
