import { FC } from "react";
import { TitleQuill } from "@/features/construct-components/construct-title";
import { ParagraphQuill } from "@/features/construct-components/construct-paragraph";
import { ConstructImage } from "@/features/construct-components/construct-image";
import cls from "./site-construct-panel.module.scss";
import { ButtonQuill } from "@/features/construct-components/construct-button";
import { QuoteQuill } from "@/features/construct-components/construct-quote";
import { Divider } from "@/features/construct-components/construct-divider";
import { SidebarButton } from "@/shared/ui/sidebar-button";
import { TitleIcon } from "../assets/title-icon";
import { ParagraphIcon } from "../assets/paragraph-icon";
import { MarkedListIcon } from "../assets/marked-list-icon";
import { OrderedListIcon } from "../assets/ordered-list-icon";
import { ImageIcon } from "../assets/image-icon";
import { DividerIcon } from "../assets/divider-icon";
import { ButtonIcon } from "../assets/button-icon";
import { QuoteIcon } from "../assets/quote-icon";
import { FormItemIcon } from "../assets/form-item-icon";

interface SiteConstructPanelProps {
  onClick: (element: JSX.Element) => void;
}

export const SiteConstructPanel: FC<SiteConstructPanelProps> = ({ onClick }) => {
  return (
    <div className={cls.panel}>
      <div className={cls.panel_wrapper}>
        <div className={cls.panel_item}>
          <h3 className={cls.panel_item_title}>Название сайта</h3>
        </div>
        <div className={cls.panel_item}>
          <h3 className={cls.panel_item_title}>Цвет страницы</h3>
        </div>
        <div className={cls.panel_item}>
          <h3 className={cls.panel_item_title}>Базовый</h3>
          <SidebarButton
            icon={<TitleIcon className={cls.icon} />}
            title="Заголовок"
            onClick={onClick}
            element={<TitleQuill />}
          />
          <SidebarButton
            icon={<ParagraphIcon className={cls.icon} />}
            title="Параграф"
            onClick={onClick}
            element={<ParagraphQuill />}
          />
          <SidebarButton
            icon={<MarkedListIcon className={cls.icon} />}
            title="Маркированный"
            onClick={onClick}
            element={<></>}
          />
          <SidebarButton
            icon={<OrderedListIcon className={cls.icon} />}
            title="Нумерованный"
            onClick={onClick}
            element={<></>}
          />
          <SidebarButton
            icon={<ImageIcon className={cls.icon} />}
            title="Изображение"
            onClick={onClick}
            element={<ConstructImage />}
          />
          <SidebarButton
            icon={<DividerIcon className={cls.icon} />}
            title="Разделитель"
            onClick={onClick}
            element={<Divider />}
          />
          <SidebarButton
            icon={<ButtonIcon className={cls.icon} />}
            title="Кнопка"
            onClick={onClick}
            element={<ButtonQuill />}
          />
          <SidebarButton
            icon={<QuoteIcon className={cls.icon} />}
            title="Цитата"
            onClick={onClick}
            element={<QuoteQuill />}
          />
        </div>
        <div className={cls.panel_item}>
          <h3 className={cls.panel_item_title}>Форма</h3>
          <SidebarButton
            icon={<FormItemIcon className={cls.icon} />}
            title="input"
            onClick={onClick}
            element={<></>}
          />
          <SidebarButton
            icon={<FormItemIcon className={cls.icon} />}
            title="textarea"
            onClick={onClick}
            element={<></>}
          />
          <SidebarButton
            icon={<FormItemIcon className={cls.icon} />}
            title="checkbox"
            onClick={onClick}
            element={<></>}
          />
          <SidebarButton
            icon={<FormItemIcon className={cls.icon} />}
            title="radio"
            onClick={onClick}
            element={<></>}
          />
        </div>
      </div>
    </div>
  );
};
