import { FC } from "react";
import { TitleQuill } from "@/features/construct-components/construct-title";
import { ParagraphQuill } from "@/features/construct-components/construct-paragraph";
import cls from "./site-construct-panel.module.scss";
import { ButtonQuill } from "@/features/construct-components/construct-button";
import { QuoteQuill } from "@/features/construct-components/construct-quote";

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
          <div className={cls.panel_item_feature} onClick={() => onClick(<TitleQuill />)}>
            title
          </div>
          <div className={cls.panel_item_feature} onClick={() => onClick(<ParagraphQuill />)}>
            paragraph
          </div>
          <div className={cls.panel_item_feature}></div>
          <div className={cls.panel_item_feature}></div>
          <div className={cls.panel_item_feature}></div>
          <div className={cls.panel_item_feature}></div>
          <div className={cls.panel_item_feature} onClick={() => onClick(<ButtonQuill />)}>
            button
          </div>
          <div className={cls.panel_item_feature} onClick={() => onClick(<QuoteQuill />)}>
            quote
          </div>
        </div>
        <div className={cls.panel_item}>
          <h3 className={cls.panel_item_title}>Форма</h3>
          <div className={cls.panel_item_feature}></div>
          <div className={cls.panel_item_feature}></div>
          <div className={cls.panel_item_feature}></div>
          <div className={cls.panel_item_feature}></div>
          <div className={cls.panel_item_feature}></div>
          <div className={cls.panel_item_feature}></div>
          <div className={cls.panel_item_feature}></div>
          <div className={cls.panel_item_feature}></div>
        </div>
      </div>
    </div>
  );
};
