import { FC, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useAppSelector } from "@/shared/hooks/redux-hooks";
import { getFormList } from "@/entities/construct-form";
import { ButtonSubmit } from "@/shared/ui/button-submit";
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
    let timeout: NodeJS.Timeout;
    if (isSubmit) {
      timeout = setTimeout(() => {
        setIsSubmit(false);
      }, 50);
      form.forEach(item => toast.info(`${item.label}: ${item.value}`, { toastId: item.id }));
    }

    return () => clearTimeout(timeout);
  }, [isSubmit]);

  const handleSubmit = () => {
    setIsSubmit(true);
  };

  return (
    <div style={{ width, height, top: position?.top, left: position?.left, position: "absolute" }}>
      <ButtonSubmit onSubmit={handleSubmit} />
    </div>
  );
};
