import { FC, useState, useEffect } from "react";
import { useAppSelector } from "@/shared/hooks/redux-hooks";
import { getFormList } from "@/entities/construct-form";
import { ButtonSubmit } from "@/shared/ui/button-submit";
import { SubmitShow } from "@/shared/ui/submit-show";
import { SiteElement } from "@/entities/site/model/site.types";

interface ConstructFormButtonProps {
  position?: SiteElement["position"];
  width?: number;
  height?: number;
}

export const ConstructFormButton: FC<ConstructFormButtonProps> = ({ position, width, height }) => {
  const form = useAppSelector(getFormList);
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSubmit(false);
    }, 50);
    return () => clearTimeout(timeout);
  }, [isSubmit]);

  const handleSubmit = () => {
    setIsSubmit(true);
  };

  return (
    <div style={{ width, height, top: position?.top, left: position?.left, position: "absolute" }}>
      <ButtonSubmit onSubmit={handleSubmit} />
      {isSubmit && <SubmitShow form={form} />}
    </div>
  );
};
