import { useId, useState } from "react";
import { Label } from "@/shared/ui/label";
import { ButtonOk } from "@/shared/ui/button-ok";
import { ButtonEdit } from "@/shared/ui/button-edit";
import { Textarea } from "@/shared/ui/textarea";
import { useConstructTextarea } from "@/shared/hooks/use-construct-textarea";
import { ConstructTextareaEdit } from "./construct-textarea-edit";
import { TEXTAREA_INIT } from "./constants";
import cls from "./construct-textarea.module.scss";
import { SiteElement } from "@/entities/site/model/site.types";

interface ConstructTextarea {
  width?: number;
  height?: number;
  position?: SiteElement["position"];
}

export const ConstructTextarea = ({ position, width, height }: ConstructTextarea) => {
  const inputId = useId();

  const [isEdit, setEdit] = useState(false);
  const { value, handleEdit } = useConstructTextarea(TEXTAREA_INIT);

  return (
    <div
      className={cls.textarea}
      style={{ top: position?.top, left: position?.left, width, height }}
    >
      <div className={cls.textarea__construct}>
        <Label forValue={inputId} label={value.label} />
        <Textarea id={inputId} placeholder={value.placeholder} rows={+value.rows || 5} />
      </div>

      {isEdit && <ConstructTextareaEdit value={value} onEdit={handleEdit} />}

      {isEdit ? (
        <div className={cls.button_ok}>
          <ButtonOk onClick={() => setEdit(false)} />
        </div>
      ) : (
        <div className={cls.button_edit}>
          <ButtonEdit onClick={() => setEdit(true)} />
        </div>
      )}
    </div>
  );
};
