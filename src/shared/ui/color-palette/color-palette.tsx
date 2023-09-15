import { ColorPicker, useColor } from "react-color-palette";
import cls from "./color-palette.module.scss";
import "react-color-palette/css";

export const ColorPalette = () => {
  const [color, setColor] = useColor("#561ecb");

  return (
    <div className={cls.color_palette}>
      <ColorPicker
        color={color}
        onChange={setColor}
      />
    </div>
  )
};