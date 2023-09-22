import { CSSProperties, FC, PropsWithChildren, useRef } from "react";
import { ButtonClose } from "../button-close";
import { useClickOutside } from "@/shared/hooks/use-click-outside";
import cls from "./modal-code.module.scss";

interface ModalCodeProps {
  onClose: () => void;
  open: boolean;
  bg?: CSSProperties["backgroundColor"];
}

export const ModalCode: FC<PropsWithChildren<ModalCodeProps>> = ({
  children,
  onClose,
  open,
  bg,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useClickOutside(buttonRef, modalRef, () => onClose());

  return open ? (
    <div className={cls.modal_code} data-testid="modal-code">
      <div
        className={cls.modal_code__body}
        ref={modalRef}
        style={bg ? { backgroundColor: bg } : {}}
      >
        {children}
        <div className={cls.button_close} ref={buttonRef}>
          <ButtonClose onClose={onClose} />
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};
