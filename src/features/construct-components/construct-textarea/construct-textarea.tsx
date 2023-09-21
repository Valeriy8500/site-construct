import { FC } from "react";
import { Label } from "@/shared/ui/label";
import { Textarea } from "@/shared/ui/textarea";
import { useConstructTextarea } from "@/shared/hooks/use-construct-textarea";
import { ConstructTextareaEdit } from "./construct-textarea-edit";
import { TEXTAREA_INIT } from "./constants";
import { SiteElement } from "@/entities/site/model/site.types";
import cls from "./construct-textarea.module.scss";

interface ConstructTextareaProps {
  edit: boolean;
  id: string;
  width?: number;
  height?: number;
  position?: SiteElement["position"];
}

export const ConstructTextarea: FC<ConstructTextareaProps> = ({
  edit,
  id,
  position,
  width,
  height,
}) => {
  const { value, handleEdit } = useConstructTextarea(TEXTAREA_INIT, id);

  return (
    <div
      className={cls.textarea}
      style={{ top: position?.top, left: position?.left, width, height }}
    >
      <div className={cls.textarea__construct}>
        <Label forValue={id} label={value.label} />
        <Textarea
          id={id}
          placeholder={value.placeholder}
          rows={+value.rows || 5}
          name="textarea"
          onChange={handleEdit}
        />
      </div>

      {edit && <ConstructTextareaEdit value={value} onEdit={handleEdit} />}
    </div>
  );
};
