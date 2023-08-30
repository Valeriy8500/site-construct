import cls from "./site-construct-panel.module.scss";

export const SiteConstructPanel = () => {
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
          <div className={cls.panel_item_feature}></div>
          <div className={cls.panel_item_feature}></div>
          <div className={cls.panel_item_feature}></div>
          <div className={cls.panel_item_feature}></div>
          <div className={cls.panel_item_feature}></div>
          <div className={cls.panel_item_feature}></div>
          <div className={cls.panel_item_feature}></div>
          <div className={cls.panel_item_feature}></div>
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
