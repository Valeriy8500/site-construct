import { ReactNode } from "react";
import clsx from "clsx";
import { MdClose } from "react-icons/md";
import { Portal } from "@/shared/ui/portal";
import cls from "./modal.module.scss";
import { useAnimations } from "@/shared/hooks/use-animation";
import { Button, Themes } from "@/shared/ui/button";
import { IShowSite } from "@/widgets/site-view-panel/ui/site-view-panel";

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  style?: object;
  showSite?: IShowSite;
  setShowSite?: React.Dispatch<React.SetStateAction<IShowSite>>;
  title?: string;
}

const ANIMATION_DELAY = 150;

export const Modal = (props: ModalProps) => {
  const { className = "", children, isOpen, onClose, title, style, showSite, setShowSite } = props;

  const { entering, exit, exited, exiting, entered } = useAnimations({
    delay: ANIMATION_DELAY,
    onExit: onClose,
    isEnter: isOpen,
  });

  return (
    <Portal id={`modal-root`}>
      <div
        className={clsx(cls.background, { [cls.opened]: entered }, { [cls.closed]: exited })}
        onClick={exit}
      />
      <div
        className={clsx(
          cls.modal,
          { [cls.opened]: entered },
          { [cls.closed]: exited },
          { [cls.closing]: exiting },
          { [cls.opening]: entering },
          className
        )}
        style={style}
      >
        <div className={showSite?.openSiteModal ? cls.show_site_modal__header : cls.header}>
          {title ? <h1>{title}</h1> : <span />}
          <Button theme={Themes.clear} onClick={exit}>
            <MdClose color={"white"} size={"30px"} />
          </Button>
        </div>
        <div className={cls.content}>{children}</div>
        {showSite?.openModalHint ? (
          <div className={cls.hint_container}>
            <div className={cls.hint}>
              <span>Для выхода из полноэкранного режима нажмите Esc</span>
            </div>
            <Button
              theme={Themes.clear}
              className={cls.hint_btn}
              onClick={() =>
                setShowSite!((prev: IShowSite) => {
                  return {
                    ...prev,
                    openModalHint: false,
                  };
                })
              }
            >
              <MdClose color={"white"} size={"13px"} />
            </Button>
          </div>
        ) : null}
      </div>
    </Portal>
  );
};
