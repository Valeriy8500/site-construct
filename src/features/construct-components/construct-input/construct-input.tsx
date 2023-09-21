import { Label } from "@/shared/ui/label";
import { Input } from "@/shared/ui/input";
import { ConstructInputEdit } from "./construct-input-edit";
import { useConstructInput } from "@/shared/hooks/use-construct-input";
import { INPUT_INIT } from "./constants";
import { SiteElement } from "@/entities/site/model/site.types";
import cls from "./construct-input.module.scss";

interface ConstructInputProps {
  edit: boolean;
  id: string;
  position?: SiteElement["position"];
  width?: number;
}

export const ConstructInput = ({ edit, id, position, width }: ConstructInputProps) => {
  const { value, handleEdit } = useConstructInput(INPUT_INIT, id);

  return (
    <div className={cls.input} style={{ top: position?.top, left: position?.left, width }}>
      <div className={cls.input__construct}>
        <Label forValue={id} label={value.label} />
        <Input
          id={id}
          type="text"
          placeholder={value.placeholder}
          name="input"
          onChange={handleEdit}
        />
      </div>

      {edit && <ConstructInputEdit value={value} onEdit={handleEdit} />}
    </div>
  );
};
