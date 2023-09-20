import { useEffect, useState } from "react";
import { BsFillPaletteFill } from "react-icons/bs";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import cls from "./site-construct-head-panel.module.scss";
import { ColorPalette } from "@/shared/ui/color-palette";
import { useAppSelector, useAppDispatch } from "@/shared/hooks/redux-hooks";
import { addName, getSite } from "@/entities/site/model/site.selectors";

export const SiteConstructHeadPanel = () => {
  const site = useAppSelector(getSite);
  const [siteName, setSiteName] = useState<string>(site.name);
  const [isOpenPalette, setIsOpenPalette] = useState<boolean>(false);

  useEffect(() => {
    setSiteName(site.name);
  }, [site.name]);

  const dispatch = useAppDispatch();

  const OnChangeSiteName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSiteName(e.target.value);
  };

  const handleBlur = () => {
    dispatch(addName(siteName));
  };

  return (
    <div className={cls.panel_head}>
      <div className={cls.panel_head__item}>
        <Label forValue="site_name" label="Название сайта" className={cls.panel_head__label} />
        <Input
          type="text"
          id="site_name"
          name="name"
          className={cls.panel_head__input}
          onChange={OnChangeSiteName}
          value={siteName}
          onBlur={handleBlur}
        />
      </div>
      <div className={cls.panel_head__item}>
        <Label forValue="site_color" label="Цвет страницы" className={cls.panel_head__label} />
        <Input
          type="text"
          id="site_color"
          name="color"
          className={cls.panel_head__input}
          disabled={true}
          value={site.bg}
        />
        <div
          className={cls.panel_head__palette_btn}
          title="Выбрать цвет"
          onClick={() => setIsOpenPalette(prev => !prev)}
        >
          <BsFillPaletteFill />
        </div>
      </div>
      {isOpenPalette ? <ColorPalette closePalette={() => setIsOpenPalette(false)} /> : null}
    </div>
  );
};
