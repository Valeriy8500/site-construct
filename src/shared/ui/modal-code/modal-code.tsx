import { FC, PropsWithChildren, useRef } from "react";
import { ButtonClose } from "../button-close";
import { useClickOutside } from "@/shared/hooks/use-click-outside";
import cls from "./modal-code.module.scss";

interface ModalCodeProps {
  onClose: () => void;
}

export const ModalCode: FC<PropsWithChildren<ModalCodeProps>> = ({ children, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useClickOutside(buttonRef, modalRef, () => onClose());

  return (
    <div className={cls.modal_code} data-testid="modal-code">
      <div className={cls.modal_code__body} ref={modalRef}>
        {children}
        <div className={cls.button_close} ref={buttonRef}>
          <ButtonClose onClose={onClose} />
        </div>
      </div>
    </div>
  );
};
