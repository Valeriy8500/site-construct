import { useId, useState } from "react";
import { Label } from "@/shared/ui/label";
import { Input } from "@/shared/ui/input";
import { ButtonOk } from "@/shared/ui/button-ok";
import { ButtonEdit } from "@/shared/ui/button-edit";
import { ConstructInputEdit } from "./construct-input-edit";
import { useConstructInput } from "@/shared/hooks/useConstructInput";
import { INPUT_INIT } from "./constants";
import cls from "./construct-input.module.scss";

export const ConstructInput = () => {
  const inputId = useId();

  const [isEdit, setEdit] = useState(false);
  const { value, handleEdit } = useConstructInput(INPUT_INIT);

  return (
    <div className={cls.input}>
      <div className={cls.input__construct}>
        <Label forValue={inputId} label={value.label} />
        <Input id={inputId} type="text" placeholder={value.placeholder} onChange={() => {}} />
      </div>

      {isEdit && <ConstructInputEdit value={value} onEdit={handleEdit} />}

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
