import { ColorPicker, useColor } from "react-color-palette";
import cls from "./color-palette.module.scss";
import "react-color-palette/css";
import { Button } from "@/shared/ui/button";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/redux-hooks";
import { addColor, getSiteColor } from "@/entities/site/model/site.selectors";
import { useEffect, useRef } from "react";

export const ColorPalette = ({ closePalette }: any) => {
  const baseColor = useAppSelector(getSiteColor);
  const dispatch = useAppDispatch();
  const [color, setColor] = useColor(baseColor!);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const element = e.target as HTMLElement;
      if (root.current) root.current.contains(element) || closePalette();
    };
    document.addEventListener('click', (e) => onClick(e), true);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <div
      className={cls.color_palette}
      ref={root}
    >
      <ColorPicker
        color={color}
        onChange={setColor}
        height={200}
      />
      <Button
        children="Сохранить"
        color="#e0282e"
        className={cls.color_palette__btn}
        onClick={() => dispatch(addColor(color.hex))}
      />
    </div>
  )
};