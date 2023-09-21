import { useId } from "react";
import { Label } from "@/shared/ui/label";
import { Input } from "@/shared/ui/input";
import { ConstructInputEdit } from "./construct-input-edit";
import { useConstructInput } from "@/shared/hooks/use-construct-input";
import { INPUT_INIT } from "./constants";
import cls from "./construct-input.module.scss";
import { SiteElement } from "@/entities/site/model/site.types";

interface ConstructInputProps {
  edit: boolean;
  position?: SiteElement["position"];
  width?: number;
}

export const ConstructInput = ({ edit, position, width }: ConstructInputProps) => {
  const inputId = useId();

  const { value, handleEdit } = useConstructInput(INPUT_INIT);

  return (
    <div
      className={cls.input}
      style={{ top: position?.top, left: position?.left, width }}
    >
      <div className={cls.input__construct}>
        <Label forValue={inputId} label={value.label} />
        <Input id={inputId} type="text" placeholder={value.placeholder} onChange={() => { }} />
      </div>

      {edit && <ConstructInputEdit value={value} onEdit={handleEdit} />}
    </div>
  );
};
