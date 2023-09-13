import { v4 as uuidv4 } from "uuid";
import cls from "./site-construct-panel.module.scss";
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
import { setSiteElement } from "@/entities/site/model/site.selectors.ts";
import { useAppDispatch } from "@/shared/hooks/redux-hooks.ts";

export const SiteConstructPanel = () => {
  const dispatch = useAppDispatch();
  const handleSetSiteElement = (content: string) => {
    dispatch(
      setSiteElement({
        id: uuidv4(),
        content,
        width: 200,
        height: 200,
      })
    );
  };

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
            onClick={() => handleSetSiteElement("construct-title")}
          />
          <SidebarButton
            icon={<ParagraphIcon className={cls.icon} />}
            title="Параграф"
            onClick={() => handleSetSiteElement("construct-paragraph")}
          />
          <SidebarButton
            icon={<MarkedListIcon className={cls.icon} />}
            title="Маркированный"
            onClick={() => handleSetSiteElement("construct-li")}
          />
          <SidebarButton
            icon={<OrderedListIcon className={cls.icon} />}
            title="Нумерованный"
            onClick={() => handleSetSiteElement("construct-ol")}
          />
          <SidebarButton
            icon={<ImageIcon className={cls.icon} />}
            title="Изображение"
            onClick={() => handleSetSiteElement("construct-image")}
          />
          <SidebarButton
            icon={<DividerIcon className={cls.icon} />}
            title="Разделитель"
            onClick={() => handleSetSiteElement("construct-divider")}
          />
          <SidebarButton
            icon={<ButtonIcon className={cls.icon} />}
            title="Кнопка"
            onClick={() => handleSetSiteElement("construct-button")}
          />
          <SidebarButton
            icon={<QuoteIcon className={cls.icon} />}
            title="Цитата"
            onClick={() => handleSetSiteElement("construct-quote")}
          />
          <div className={cls.panel_item}>
            <h3 className={cls.panel_item_title}>Форма</h3>
            <SidebarButton
              icon={<FormItemIcon className={cls.icon} />}
              title="input"
              onClick={() => handleSetSiteElement("construct-input")}
            />
            <SidebarButton
              icon={<FormItemIcon className={cls.icon} />}
              title="textarea"
              onClick={() => handleSetSiteElement("construct-textarea")}
            />
            <SidebarButton
              icon={<FormItemIcon className={cls.icon} />}
              title="checkbox"
              onClick={() => handleSetSiteElement("construct-checkbox")}
            />
            <SidebarButton
              icon={<FormItemIcon className={cls.icon} />}
              title="radio"
              onClick={() => handleSetSiteElement("construct-radio")}
            />
            <SidebarButton
              icon={<FormItemIcon className={cls.icon} />}
              title="select"
              onClick={() => handleSetSiteElement("construct-select")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
