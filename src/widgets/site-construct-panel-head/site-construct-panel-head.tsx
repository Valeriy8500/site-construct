import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import cls from "./site-construct-panel-head.module.scss";
import { useState } from "react";

export const SiteConstructPanelHead = () => {
  const [siteName, setSiteName] = useState<string>('');

  const OnChangeSiteName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSiteName(e.target.value);
  };

  return (
    <div className={cls.panel_head}>
      <div className={cls.panel_head__item}>
        <Label
          forValue="site_name"
          label="Название сайта"
          className={cls.panel_head__label}
        />
        <Input
          type="text"
          id="site_name"
          name="name"
          className={cls.panel_head__input}
          onChange={OnChangeSiteName}
          value={siteName}
        />
      </div>
      <div className={cls.panel_head__item}>
        <Label
          forValue="site_color"
          label="Цвет страницы"
          className={cls.panel_head__label}
        />
        <Input
          type="text"
          id="site_color"
          name="color"
          className={cls.panel_head__input}
        />
      </div>
    </div>
  )
};