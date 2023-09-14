import { FC, MouseEventHandler } from "react";
import cls from "./sidebar-button.module.scss";

interface SidebarButtonProps {
  icon: React.ReactNode;
  title: string;
  onClick: MouseEventHandler<HTMLDivElement>;
}

export const SidebarButton: FC<SidebarButtonProps> = ({ icon, title, onClick }) => {
  return (
    <div className={cls.panel_item_feature} onClick={onClick}>
      {icon}
      {title}
    </div>
  );
};
