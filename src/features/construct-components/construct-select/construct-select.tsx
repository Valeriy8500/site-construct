import { FC } from "react";
import { MySelect } from "@/shared/ui/select/select";
import { SelectEdit } from "./select-edit";
import { useConstructSelect } from "@/shared/hooks/use-construct-select";
import { SELECT_INIT_OPTIONS } from "./constants";
import { SiteElement } from "@/entities/site/model/site.types";
import cls from "./construct-select.module.scss";

interface ConstructSelectProps {
  edit: boolean;
  id: string;
  width?: number;
  height?: number;
  position?: SiteElement["position"];
}

export const ConstructSelect: FC<ConstructSelectProps> = ({
  edit,
  id,
  position,
  height,
  width,
}) => {
  const { optionsFields, handleChange, handleAddElement, handleDelete, handleSelect } =
    useConstructSelect(SELECT_INIT_OPTIONS, id);

  return (
    <div
      className={cls.select}
      style={{ top: position?.top, left: position?.left, width, height }}
      data-testid="construct-select"
    >
      <MySelect options={optionsFields} onSelect={handleSelect} />

      {edit && (
        <SelectEdit
          options={optionsFields}
          onEditChange={handleChange}
          onEditDelete={handleDelete}
          onAddElement={handleAddElement}
        />
      )}
    </div>
  );
};
