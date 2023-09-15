import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import cls from "./site-construct-head-panel.module.scss";
import { useState } from "react";
import { BsFillPaletteFill } from "react-icons/bs";
import { ColorPalette } from "@/shared/ui/color-palette";

export const SiteConstructHeadPanel = () => {
  const [siteName, setSiteName] = useState<string>('');
  const [isOpenPalette, setIsOpenPalette] = useState<boolean>(false);

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
        <div
          className={cls.panel_head__palette_btn}
          title="Выбрать цвет"
          onClick={() => setIsOpenPalette(prev => !prev)}
        >
          <BsFillPaletteFill />
        </div>
      </div>
      {isOpenPalette ? <ColorPalette /> : null}
    </div>
  )
};