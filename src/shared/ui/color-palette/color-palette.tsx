import { ColorPicker, useColor } from "react-color-palette";
import cls from "./color-palette.module.scss";
import "react-color-palette/css";
import { Button } from "@/shared/ui/button";
import { useAppDispatch } from "@/shared/hooks/redux-hooks";
import { addColor } from "@/entities/site/model/colorPalette.selectors";

export const ColorPalette = () => {
  const [color, setColor] = useColor("#561ecb");
  const dispatch = useAppDispatch();

  return (
    <div className={cls.color_palette}>
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