import { FC } from "react";
import cls from "./sidebar-button.module.scss";

interface SidebarButtonProps {
  icon: React.ReactNode;
  title: string;
  element: JSX.Element;
  onClick: (element: JSX.Element) => void;
}

export const SidebarButton: FC<SidebarButtonProps> = ({ icon, title, onClick, element }) => {
  return (
    <div className={cls.panel_item_feature} onClick={() => onClick(element)}>
      {icon}
      {title}
    </div>
  );
};
